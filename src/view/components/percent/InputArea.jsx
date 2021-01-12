import * as React from "react";
import InputParts from "../common/InputParts";
import Button from "../common/Button";
import SampleList from "./SampleList";

const InputArea = (props) => {
  let buttonName;
  let buttonText;
  if (props.viewResult === false) {
    buttonName = "inputItemsDataPage";
    buttonText = "NEXT";
  } else if (props.viewResult === true) {
    buttonName = "goResultPage";
    buttonText = "RESULTE";
  }

  let sampleListButtonText;
  if (props.openList) {
    sampleListButtonText = "Sample list is close";
  } else {
    sampleListButtonText = "Sample list is open";
  }

  return (
    <div className="InputArea contents">
      <p className="InputArea__text">
        {props.num}つ目のアイテムの
        <br />
        アイテム名,分量,アルコール度数
        <br />
        を入力してください。
      </p>
      <p className="InputArea__subText">
        アイテム名は非必須。<br/>
        分量とアルコール度数は必須です。
      </p>

      <InputParts
        num={props.num}
        value={props.name}
        onBlur={props.onBlur}
        onChange={props.onChenge}
        label=" アイテム名"
        type="text"
        name="name"
      />

      <InputParts
        num={props.num}
        value={props.amount}
        onBlur={props.onBlur}
        onChange={props.onChenge}
        label="分量"
        type="number"
        name="amount"
        unit="㎖"
      />

      <InputParts
        num={props.num}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChenge}
        label="アルコール度数"
        type="number"
        name="percent"
        unit="%"
      />

      <Button
        className="listOpenButton"
        type="button"
        onClick={props.onOpen}
        text={sampleListButtonText}
      />

      <SampleList openList={props.openList} />

      <Button
        className="nomalButton"
        type="button"
        name={buttonName}
        onClick={props.onClick}
        text={buttonText}
        resultView={props.resultView}
      />
    </div> //end InputArea
  );
};

export default InputArea;
