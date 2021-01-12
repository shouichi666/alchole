import React from "react";

const WeightSelect = (props) => {
  let cN = "";
  props.list === true ? (cN = "_isOpen") : (cN = "");
  const list = [];
  const weight = () => {
    for (let i = 45; i < 100; i += 0.5) {
      list.push(
        <li className={`WeightSelect${cN}__list--item`} value={i}>
          <input
            type="radio"
            id={i}
            onChange={props.onChange}
            value={i}
            checked={String(props.weight) === String(i)}
          />
          <label
            className={`WeightSelect${cN}__label`}
            htmlFor={i}
            onClick={props.onClick}
          >
            {i}kg
          </label>
        </li>
      );
    }
  };
  weight();
  return (
      <div className={`WeightSelect${cN}`}>
          <div className={`WeightSelect${cN}__wrap`}>
              <p className={`WeightSelect${cN}__heading`}>選択してください。</p>
            <ul className={`WeightSelect${cN}__list`}>
                {list}
            </ul>

          </div>
    </div>
  );
};

export default WeightSelect;
