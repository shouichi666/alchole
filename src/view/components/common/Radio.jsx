import React from "react";

const Radio = (props) => {
  return (
    <div className="Radio">
      <input
        className="Radio__input"
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        checked={props.sex === props.name}
        onChange={props.onChange}
      />
      <label className="Radio__label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
};

export default Radio;
