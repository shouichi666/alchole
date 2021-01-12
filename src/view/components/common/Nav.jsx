import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


const Nav = (props) => {

  let className = 'Nav';
  if ( props.openNav ){
    className = 'NavIsOpen';
  } else {
    className = 'Nav'
  }

  return(
    <nav className={className} onClick={props.onClick}>
      <div className={className + "__box"}>
        <Link to="/" onClick={props.onClick}>
          TOP
        </Link>
        <Link to="/a/input" onClick={props.onClick}>
          アルコール計算
        </Link>
        <Link to="/dissolves/top" onClick={props.onClick}>
          アルコールの分解を計算
        </Link>
        <Link to="/search/Choose" onClick={props.onClick}>
          SEARCH
        </Link>
        <Button
          text="CLOCE"
          className="closeButton"
          onClick={props.onClick}
        />
      </div>

  </nav>
  )
}

export default Nav