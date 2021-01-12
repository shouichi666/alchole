import * as React from "react";
import { Route } from "react-router-dom";
import InputArea from "../components/percent/InputArea";
import FirstInputArea from "../components/percent/FirstInputArea";
import ResultArea from "../components/percent/ResultArea";
import Header from "../components/common/Header";
import ErrorModal from "../components/common/ErrorModal";

export default class PercentCalculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayName: [],
      arrayAmount: [],
      arrayPercent: [],
      countItem: null,
      countPage: 1,
      error: false,
      openModal: false,
      openList: false,
      totalAmount: 0,
      viewResult: false,
      resultPercent: null,
      percentValue: null,
      data: [],
    };

    this.onChange = this.onChange.bind(this);
    this.SetCountItem = this.SetCountItem.bind(this);
    this.BranchData = this.BranchData.bind(this);
    this.ClickNextBtn = this.ClickNextBtn.bind(this);
    this.ChangeOpenList = this.ChangeOpenList.bind(this);
    this.ChangeOpenModal = this.ChangeOpenModal.bind(this);
  } //end constoructor

  onChange = (e) => {
    this.setState({
      percentValue: this.state.arrayPercent[this.state.countPage - 1],
    });
  };

  SetCountItem = (e) => {
    //onChange/入力された数を参照し配列を作成、各stateにset
    let targetName = e.target.name;
    let value = e.target.value;
    if (targetName === "itemCount") {
      this.setState({ countItem: Number(value) });
    }

    let num = value;
    let array1 = [];
    let array2 = [];
    let array3 = [];
    for (let i = 0; i < num; i++) {
      array1.push("name" + i);
      array2.push("amount" + i);
      array3.push("percent" + i);
    }
    this.setState({
      arrayName: array1,
      arrayAmount: array2,
      arrayPercent: array3,
    });
  }; // end SetCountItem

  BranchData = (e) => {
    //onBlur
    let targetName = e.target.name;
    let targetValue = e.target.value;
    let arrayName = this.state.arrayName;
    let arrayAmount = this.state.arrayAmount;
    let arrayPercent = this.state.arrayPercent;
    let changeChara = this.state.countPage - 1;
    let targetPercent;

    const nameCheck = (argName) => {
      //targetValueに数値をsetする関数
      const nameBook = [
        [
          "ｼﾞﾝ",
          "ジン",
          "gin",
          "ウォッカ",
          "ｳｫｯｶ",
          "vodka",
          "ﾗﾑ",
          "ラム",
          "rum",
          "ウイスキー",
          "スコッチ",
          "バーボン",
          "ﾃｷｰﾗ",
          "テキーラ",
        ],
        ["焼酎", "リキュール"],
        ["日本酒", "ワイン", "赤ワイン"],
        ["白ワイン"],
        ["ビール", "チューハイ"],
      ];
      for (let i = 0; i < nameBook.length; i++) {
        let now = nameBook[i];
        for (let n = 0; n < now.length; n++) {
          if (now[n] === argName) {
            switch (i) {
              case 0:
                targetPercent = 40;
                break;

              case 1:
                targetPercent = 25;
                break;

              case 2:
                targetPercent = 16;
                break;

              case 3:
                targetPercent = 13;
                break;

              case 4:
                targetPercent = 5;
                break;

              default:
                break;
            }
          }
        }
      }
    };
    nameCheck(targetValue);

    if (targetName === "name") {
      arrayPercent.splice(changeChara, 1, Number(targetPercent));
      arrayName.splice(changeChara, 1, targetValue);
      this.setState({
        arrayName: arrayName,
        arrayPercent: arrayPercent,
        percentValue: targetPercent,
      });
    } else if (targetName === "amount") {
      arrayAmount.splice(changeChara, 1, Number(targetValue));
      this.setState({
        arrayAmount: arrayAmount,
      });
    } else if (targetName === "percent") {
      arrayPercent.splice(changeChara, 1, Number(targetValue));
      this.setState({
        arrayPercent: arrayPercent,
      });
    }
  }; //end BranchData

  ChangeOpenList = () => {
    this.setState({ openList: !this.state.openList });
  }; //end ChangeOpenList

  ChangeOpenModal = () => {
    this.setState({
      nullInput: false,
      openModal: !this.state.openModal,
    });
  }; //end ChangeOpenModal

  ClickNextBtn = (e) => {
    //buttonがClick時の処理
    this.setState({
      percentValue: null,
    });

    const addPageCount = () => {
      //countPageを1増やす関数。branchButtonNameで実行
      if (0 <= this.state.arrayName.length) {
        this.setState({
          countPage: this.state.countPage + 1,
        });
      }
    }; //end addPageCount

    const viewResultChange = () => {
      //最後の入力画面になるとviewResultChangeを変更
      if (this.state.countPage === this.state.countItem - 1) {
        this.setState({ viewResult: true });
      } //end if
    }; //end viewResultChange

    const calcPercent = () => {
      //入力せれた値を計算しセットする
      let totalAmount = this.state.arrayAmount.reduce((a, b) => a + b);
      let molecule = 0;
      for (let i = 0; i < this.state.countItem; i++) {
        molecule += this.state.arrayAmount[i] * this.state.arrayPercent[i];
      }
      let answer = (molecule / totalAmount - totalAmount * 0.012).toFixed(2);
      this.setState({ resultPercent: answer });
    }; //end calcPercent

    const checkAmountPercent = (e) => {
      const amount = this.state.arrayAmount;
      const percent = this.state.arrayPercent;
      let checkNum = this.state.countPage - 1;
      const buttonName = e.target.name;
      if (
        amount[checkNum] === "amount" + checkNum ||
        percent[checkNum] === "percent" + checkNum
      ) {
        this.setState({ openModal: true });
      } else {
        addPageCount();
        viewResultChange();
        if (buttonName === "goResultPage") {
          viewResultChange();
          calcPercent();
          setTimeout(() => {
            this.props.history.push("/a/result/");
          }, 500);
        } else {
          this.props.history.push(
            "/a/data/" + Number(this.state.countPage + 1)
          );
        }
      }
    }; //end checkAmountPercent

    const checkCountItem = (e) => {
      //countItemがnull or '' ならモーダルをtrueにする
      const countItem = this.state.countItem;
      if (countItem == null || countItem === 0) {
        this.setState({ openModal: true });
      } else {
        this.props.history.push("/a/data/1");
      }
    }; //end checkCountItem

    const branchButtonName = (e) => {
      //Clickされたbuttonで処理を分ける関数
      const buttonName = e.target.name;
      if (buttonName === "inputItemsDataPage") {
        checkAmountPercent(e);
      } else if (buttonName === "goResultPage") {
        checkAmountPercent(e);
      } else if (buttonName === "inputCountPage") {
        checkCountItem(e);
      } //end if
    }; //end branchButtonName

    branchButtonName(e);
  }; //end ClickNextBtn

  componentDidMount() {
    return fetch(
      // "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=gin"
      // "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
      // "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=10788"
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    )
      .then((res) => res.json())
      .then(
        (json) => {
          this.setState({
            data: [json],
            // data: json.ingredients[0].strIngredient
          });
          console.log(json);
        },
        (error) => {
          this.setState({
            data: "error",
            error: true,
          });
          console.log(error);
        }
      );
  } //end componentDidMount

  render() {
    let InputAreaLoopArray = [];
    for (let i = 1; i < this.state.countItem + 1; i++) {
      InputAreaLoopArray.push(
        <Route
          path={"/a/data/" + i}
          render={() => (
            <InputArea //入力画面
              onBlur={this.BranchData}
              onChange={this.onChange}
              onClick={this.ClickNextBtn}
              onOpen={this.ChangeOpenList}
              value={this.state.percentValue}
              openList={this.state.openList}
              num={i}
              viewResult={this.state.viewResult}
            />
          )}
        /> //end Route
      ); //end InputAreaLoopArray.push
    } //end for

    return (
      <article className="container">
        <Header />

        <Route //デフォルト画面
          path="/a/input"
          render={() => (
            <FirstInputArea
              value={this.state.countItem}
              openNav={this.state.openNav}
              onChange={this.SetCountItem}
              onClick={this.ClickNextBtn}
              type="number"
              name="itemCount"
              label="アイテムの数"
              unit="個"
            />
          )}
        />

        {InputAreaLoopArray}

        <Route //結果画面
          path="/a/result"
          render={() => (
            <ResultArea
              //子に渡すプロパティを記述
              resultPercent={this.state.resultPercent}
              arrayName={this.state.arrayName}
              arrayAmount={this.state.arrayAmount}
              arrayPercent={this.state.arrayPercent}
            />
          )}
        />

        <ErrorModal
          openModal={this.state.openModal}
          onClick={this.ChangeOpenModal}
        />
      </article> //end container
    );
  }
}
