import React from "react";

const SeachRadio = (props) => {
  return (
    <div className="SeachRadio">
      <input
        className="SeachRadio__input"
        type="radio"
        name={props.name}
        label={props.label}
        id={props.id}
        value={props.value}
        checked={props.value === props.searchCotegory}
        onChange={props.onChange}
      />
      <label className="SeachRadio__label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default SeachRadio;
