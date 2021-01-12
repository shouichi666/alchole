import React from "react";

const List = (props) => {
  let box;

  if (props.datas.length > 1) {
    box = props.datas.map((data, i) => {
      return (
        <div
          className="List__flex--box"
          onClick={props.onClick}
          key={i}
          id={data.idDrink}
        >
          <h2>{data.strDrink}</h2>
          <img src={data.strDrinkThumb} alt="" />
        </div>
      );
    });
  } else {
    box = <div>none</div>;
  }

  return (
    <div className="search List">
      <h1 className="List__heading">{props.keyword}</h1>
      <p>{props.datas.length}個</p>
      <div className="List__flex">{box}</div>
    </div>
  );
};
export default List;
