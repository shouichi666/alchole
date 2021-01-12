import React, { useState } from "react";
import Button from "../common/Button";
import Radio from "../common/Radio";
import WeightSelect from "../common/WeightSelect";

const SecondPage = (props) => {
  const [list, toggleList] = useState(false);
  const onClick = () => {
    toggleList(!list);
  };
  return (
    <>
    <div className="contents SecondPage">
      <p>性別を選択してください。</p>
      <div className="SecondPage__flexBox">
        <Radio
          onChange={props.onChange}
          name="men"
          value="1"
          id="1"
          sex={props.sex}
        />
        <Radio
          onChange={props.onChange}
          name="woman"
          value="2"
          id="2"
          sex={props.sex}
        />
      </div>
        <p>体重を選択してください。</p>
        <button className="SecondPage__button" onClick={onClick}>{ props.weight}kg</button>



      <Button
        text="NEXT"
        className="nomalButton fixedButton"
        name="weight"
        onClick={props.onClick}
      />
      </div>

      <WeightSelect
        onChange={props.select}
        weight={props.weight}
        onClick={onClick}
        list={list}
      />

      </>
  );
};

export default SecondPage;
