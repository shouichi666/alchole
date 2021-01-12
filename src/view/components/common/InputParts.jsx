import * as React from 'react';

const InputParts = (props) => {
  return(
    <div className="InputParts">

      <input 
        className="InputParts__input"
        type={props.type}
        id={props.num}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
        placeholder={props.label}
        checkeda={props.checked}
      />

      <label 
        className="InputParts__label"
        htmlFor={props.num}
      >
        {props.label}
      </label>
      
      <span className="InputParts__unit">
        {props.unit}
      </span>

    </div>
  )
}

export default InputParts