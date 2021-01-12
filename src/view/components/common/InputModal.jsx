import React from "react";
import Button from "./Button";
// import InputParts from './InputParts';
import AmountSelect from "./AmountSelect";

const InputModal = (props) => {
  let cN = "InputModal";
  props.toggleModal === true ? (cN += "_isOpen") : (cN = "InputModal");
  const type = props.type;
  const n = props.id;

  const setAmountType = (n) => type[n].amount;

  return (
    <article className={cN}>
      {/* <div className={`InputModal__container`}> */}
      <div className={`${cN}__container`}>
        <p>{type[n].n}をどのくらい飲みましたか？</p>
        <p>アルコール度数{type[n].per} %</p>

        <AmountSelect
          onChange={props.onChange}
          amountType={setAmountType(n)}
          n={n}
        />

        <Button
          text="CLOSE"
          onClick={props.onClick}
          className="nomalButton fixedButton"
        />
      </div>
    </article>
  );
};

export default InputModal;
