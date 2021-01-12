import React from "react";
import Header from "../components/common/Header";
import Choose from "../components/serch/Choose";
import List from "../components/serch/List";
import Item from "../components/serch/Items";
// import datas from "./data";
import { Route } from "react-router-dom";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "",
      glass: "",
      category: "",
      datas: "",
      error: "",
      searchCotegory: "base",
      select: [],
      keyword: "",
      item: "",
      id: "",
    };
    this.category = {
      base: [],
      category: [],
      glass: [],
      name: ["name"],
    };
    // this.onClick = this.onClick.bind(this);
    this.setKeyword = this.setKeyword.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
    this.changeSearchRadio = this.changeSearchRadio.bind(this);
    this.onClickSerch = this.onClickSerch.bind(this);
  }

  componentDidMount() {
    if (this.state.keyword === "") {
      this.setState({ keyword: "Gin?" });
    }
    let aryBase = [];
    let aryCategory = [];
    let aryGlass = [];
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i < result.drinks.length; i++) {
          aryBase.push(result.drinks[i].strIngredient1);
        }
        this.setState({ base: aryBase, select: aryBase });
        this.category.base = aryBase;
      });
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i < result.drinks.length; i++) {
          aryCategory.push(result.drinks[i].strCategory);
        }
        this.setState({ category: aryCategory });
        this.category.category = aryCategory;
      });
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i < result.drinks.length; i++) {
          aryGlass.push(result.drinks[i].strGlass);
        }
        this.setState({ glass: aryGlass });
        this.category.glass = aryGlass;
      });
  }

  setKeyword(e) {
    this.setState({ keyword: e.target.value });
  }

  changeSearchRadio(e) {
    const value = e.target.value;
    this.setState({ searchCotegory: value });
    if (value === "base") {
      this.setState({ select: this.category.base });
    } else if (value === "category") {
      this.setState({ select: this.category.category });
    } else if (value === "glass") {
      this.setState({ select: this.category.glass });
    } else if (value === "name") {
      this.setState({ select: this.category.name });
    }
  }

  onClickSerch() {
    let searchCotegory = this.state.searchCotegory;
    let keyword = this.state.keyword;
    if (searchCotegory === "base") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${keyword}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({ datas: result.drinks });
          },
          (error) => {
            this.setState({ error: "error" });
          }
        );
    } else if (searchCotegory === "category") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${keyword}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({ datas: result.drinks });
          },
          (error) => {
            this.setState({ error: "error" });
          }
        );
    } else if (searchCotegory === "glass") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${keyword}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({ datas: result.drinks });
          },
          (error) => {
            this.setState({ error: "error" });
          }
        );
    } else if (searchCotegory === "name") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({ datas: result.drinks });
          },
          (error) => {
            this.setState({ error: "error" });
          }
        );
    }
    setTimeout(() => {
      this.props.history.push("/search/List");
    }, 1000);
  }

  onClickItem(e) {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e.target.id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ item: result.drinks });
        },
        (error) => {
          this.setState({ error: "error" });
        }
      );
    setTimeout(() => {
      this.props.history.push("/search/Item");
    }, 500);
  }

  render() {
    return (
      <>
        <Header />
        <div className="search">
          <Route
            path={"/search/Choose"}
            render={() => (
              <Choose
                onChange={this.changeSearchRadio}
                setKeyword={this.setKeyword}
                keyword={this.state.keyword}
                select={this.state.select}
                searchCotegory={this.state.searchCotegory}
                onClick={this.onClickSerch}
              />
            )}
          />
          <Route
            path={"/search/List"}
            render={() => (
              <List
                keyword={this.state.keyword}
                datas={this.state.datas}
                searchCotegory={this.state.searchCotegory}
                onClick={this.onClickItem}
              />
            )}
          />
          <Route
            path={"/search/Item"}
            render={() => <Item item={this.state.item} />}
          />
        </div>
      </>
    );
  }
}
