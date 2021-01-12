import React from 'react';


const Button = (props) => {
  // console.log(props.resultView);
  return(
    <button
      type={props.type}
      name={props.name}
      onClick={props.onClick}
      className={props.className}
    >
      {props.text}
    </button>
  )
}

export default Button