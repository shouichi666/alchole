import React from 'react';

const Hamberger = (props) => {

  let className = 'Hamberger';
  if( props.openNav ){
    className += 'IsOpen';
  } else {
    className = 'Hamberger';
  }

  return(
    <div className={className} onClick={props.onClick}>
      <div className={className + "__wrap"}>
        <span className={className + "__line"}></span>
        <span className={className + "__line"}></span>
        <span className={className + "__line"}></span>
      </div>
    </div>
  )
}

export default Hamberger