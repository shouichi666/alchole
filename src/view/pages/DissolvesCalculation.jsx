import * as React from "react";
// import Button from '../components/common/Button';
import Header from "../components/common/Header";
import FirstPage from "../components/dissolves/FirstPage";
import WeightPage from "../components/dissolves/WeightPage";
import TypePage from "../components/dissolves/TypePage";
import LastPage from "../components/dissolves/LastPage";
import { Route } from "react-router-dom";

export default class DissolvesCalalation extends React.Component {
  constructor() {
    super();
    this.state = {
      alchol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      amount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ml: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      blood: 0,
      result: "",
      hour: 0,
      minit: 0,
      sex: "men",
      time: null,
      totalAlc: 0,
      totalAmt: 0,
      weight: 0,
      oneHourDis: 0,
    };
    this.type = [
      { id: 0, n: "ビール", per: 5, amount: 2 },
      { id: 1, n: "チューハイ", per: 7, amount: 2 },
      { id: 2, n: "ハイボール", per: 7, amount: 2 },
      { id: 3, n: "カクテル", per: 20, amount: 1 },
      { id: 4, n: "日本酒", per: 16, amount: 4 },
      { id: 5, n: "焼酎", per: 25, amount: 3 },
      { id: 6, n: "赤ワイン", per: 17, amount: 3 },
      { id: 7, n: "白ワイン", per: 15, amount: 3 },
      { id: 8, n: "ウイスキーなど", per: 40, amount: 3 },
      { id: 9, n: "その他", per: "?", amount: 3 },
    ];

    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
  } //constructor

  handleChangeRadio = (e) => {
    const target = e.target.value;
    target === "1"
      ? this.setState({ sex: "men" })
      : this.setState({ sex: "woman" });
  };

  handleChangeWeight = (e) => {
    console.log(e);
    this.setState({
      weight: Number(e.target.value),
      oneHourDis: Number((e.target.value * 0.102).toFixed(1)),
    });
  };
  // handleChangeWeight = (e) => {
  //   this.setState({
  //     weight: Number(e.target.value),
  //     oneHourDis: Number((e.target.value * 0.102).toFixed(1)),
  //   });
  // };

  handleChangeAmount = (e) => {
    const id = Number(e.target.id);
    const value = Number(e.target.value);
    const per = this.type[id].per / 100;
    const ansAlc = (value * per * 0.79).toFixed(2);
    const ansBlood = (value * per).toFixed(1);
    let copyAlc = this.state.alchol;
    let copyAmt = this.state.amount;
    let copyMl = this.state.ml;
    copyAlc.splice(id, 1, Number(ansAlc));
    copyAmt.splice(id, 1, Number(ansBlood));
    copyMl.splice(id, 1, Number(value));
    let totalAlc = copyAlc.reduce((a, b) => a + b);
    let totalAmt = copyAmt.reduce((a, b) => a + b);
    this.setState({
      alchol: copyAlc,
      amount: copyAmt,
      ml: copyMl,
      totalAlc: totalAlc,
      totalAmt: totalAmt,
    });
  };

  onClick = (e) => {
    const btnName = e.target.name;
    const CalcResult = () => {
      const one = this.state.oneHourDis,
        totalAlc = this.state.totalAlc,
        totalAmt = this.state.totalAmt,
        resultTime = (totalAlc / one).toFixed(4),
        resultBlood = ((totalAmt / (833 * this.state.weight)) * 100).toFixed(2),
        date = String(resultTime);
      let hour, minutes;
      if (date.length === 6) {
        hour = date.slice(0, 1);
        minutes = date.substr(2, 4);
      } else {
        hour = date.slice(0, 2);
        minutes = date.substr(3, 4);
      }
      let nn = Number(minutes) / 10000;
      let tt = (60 * nn).toFixed(0);
      this.setState({
        result: resultTime,
        hour: hour,
        minit: tt,
        blood: resultBlood,
      });
    }; //CalcResult

    // const setTime = () => {
    //   const data = new Date(),
    //     h = data.getHours(),
    //     m = data.getMinutes(),
    //     s = data.getSeconds();
    // }

    switch (btnName) {
      case "first":
        this.props.history.push("/dissolves/weight");
        break;
      case "weight":
        this.props.history.push("/dissolves/type");
        break;
      case "type":
        CalcResult();
        this.props.history.push("/dissolves/last");
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <article className="container">
        <Header />

        <Route
          path="/dissolves/top"
          render={() => <FirstPage props={this.props} onClick={this.onClick} />}
        />

        <Route
          path="/dissolves/weight"
          render={() => (
            <WeightPage
              sex={this.state.sex}
              weight={this.state.weight}
              onChange={this.handleChangeRadio}
              select={this.handleChangeWeight}
              onClick={this.onClick}
            />
          )}
        />

        <Route
          path="/dissolves/type"
          render={() => (
            <TypePage
              type={this.type}
              onChange={this.handleChangeAmount}
              onClick={this.onClick}
              amount={this.handleChangeAmount}
              ml={this.state.ml}
            />
          )}
        />

        <Route
          path="/dissolves/last"
          render={() => (
            <LastPage
              result={this.state.result}
              blood={this.state.blood}
              hour={this.state.hour}
              minit={this.state.minit}
              alc={this.state.totalAlc}
            />
          )}
        />
      </article>
    );
  }
}
