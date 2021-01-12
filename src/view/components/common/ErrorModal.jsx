import React from 'react';
import Button from './Button';


const ErrorModal = (props) => {

  let className = 'Modal';
  if(props.openModal){
    className += '.open';
  } else {
    className = 'Modal';
  }

  return(
    <article className={className}>
      <div className="Modal-wrap">
        <div className="Modal-card">
          <p>入力に不備があります。</p>
          <Button
            text='OK'
            className="Modal-button"
            onClick={props.onClick}
          />
        </div>
      </div>
    </article>
  )
}

export default ErrorModal