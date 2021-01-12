import React from "react";

const SelectItem = (props) => {
  let cN = "SelectItem";

  const items = props.select.map((item, i) => {
    if (item === "name") {
      return (
        <div key={i} className={`${cN}__nameSection`}>
          <label className={`${cN}__item`} htmlFor={item}>
            {item}
          </label>
          <input
            type="text"
            id={item}
            key={i}
            value={props.keyword}
            onChange={props.setKeyword}
            placeholder={props.keyword}
          />
        </div>
      );
    } else {
      return (
        <div className={`${cN}__box`}>
          <input
            type="radio"
            id={item}
            key={i}
            value={item}
            checked={props.keyword === item}
            onChange={props.setKeyword}
            className={`${cN}__box--input`}
          />
          <label
            className={`${cN}__box--label`}
            htmlFor={item}
            onClick={props.onClick}
          >
            {item}
          </label>
        </div>
      );
    }
  });

  return <div className={cN}>{items}</div>;
};
export default SelectItem;
