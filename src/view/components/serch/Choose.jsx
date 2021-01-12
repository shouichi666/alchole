import React, { useState } from "react";
import Button from "../common/Button";
import SearchRadio from "../common/SearchRadio";
import SelectModal from "./SelectModal";

const Choose = (props) => {
  const [open, toggleOpen] = useState(false);
  const openModal = () => {
    toggleOpen(!open);
  };

  return (
    <>
      <div className="Choose">
        <p className="Choose__text">
          検索するアイテムを選んでください。
        </p>
        <div className="search__flex">
          <SearchRadio
            searchCotegory={props.searchCotegory}
            id="1"
            label="お酒"
            value="base"
            name="Base"
            onChange={props.onChange}
          />
          <SearchRadio
            searchCotegory={props.searchCotegory}
            id="2"
            label="カテゴリー"
            value="category"
            name="Category"
            onChange={props.onChange}
          />
          <SearchRadio
            searchCotegory={props.searchCotegory}
            id="3"
            label="グラス"
            value="glass"
            name="Glass"
            onChange={props.onChange}
          />
          <SearchRadio
            searchCotegory={props.searchCotegory}
            id="4"
            label="名前"
            value="name"
            name="Name"
            onChange={props.onChange}
          />
        </div>
        <p className="search__select--text">{props.keyword}</p>
        <SelectModal
          open={open}
          setKeyword={props.setKeyword}
          keyword={props.keyword}
          onClick={openModal}
          select={props.select}
          searchCotegory={props.searchCotegory}
        />
        <Button text="SEARCH" className="nomalButton" onClick={props.onClick} />
      </div>
    </>
  );
};
export default Choose;
