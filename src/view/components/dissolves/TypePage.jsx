import React, { useState } from "react";
import Button from "../common/Button";
import InputModal from "../common/InputModal";
// import Button from "../common/Button";
// import Radio from "../common/Radio";
// import Select from "../common/Select";

const TypePage = (props) => {
  const [open, toggleOpen] = useState(false);
  const [id, setId] = useState(0);
  const toggleModal = (e) => {
    let idNm = Number(e.target.id);
    toggleOpen(!open);
    setId(idNm);
  };

  const ml = props.ml;
  const types = props.type;
  let box = types.map((type) => {
    return (
      <div
        key={type.id}
        className="flexWrap__box"
        onClick={toggleModal}
        id={type.id}
        data-type="rd"
      >
        <p className="flexWrap__box--name">{type.n}</p>
        <p className="flexWrap__box--ml">{ml[type.id]}ml</p>
        <p className="flexWrap__box--percent">{type.per}%</p>
      </div>
    );
  });


  return (
    <>
      {/* {random()}; */}
      <div className="contents TypePage">
        <p className="TypePage__text">飲んだアイテムを選択してください。</p>
        <div className="flexWrap">{box}</div>

        <Button
          text="計算する"
          className="nomalButton fixedButton"
          onClick={props.onClick}
          name="type"
        />
      </div>
      <InputModal
        toggleModal={open}
        onClick={toggleModal}
        onChange={props.onChange}
        id={id}
        type={props.type}
      />
    </>
  );
};

export default TypePage;
