import React from "react";
import InputParts from "../common/InputParts";
import Button from "../common/Button";
import ResetButton from "../common/Reset";

const FirstInputArea = (props) => {
  return (
    <div className="FirstInputArea contents">
      <h2 className="FirstInputArea__head">
        このページは
        <br />
        オリジナルドリンクの
        <br />
        アルコール度数を計算します。
      </h2>
      <p className="FirstInputArea__text">
        まずは下の入力欄に
        <br />
        使用するアイテムの数を入力してください。
      </p>

      <InputParts
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        label={props.label}
        unit={props.unit}
      />

      <Button
        className="nomalButton"
        type="button"
        name="inputCountPage"
        onClick={props.onClick}
        text="計算する"
      />

      <ResetButton/>
    </div>
  );
};
export default FirstInputArea;
