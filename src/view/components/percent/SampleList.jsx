import React from 'react';




const SampleList = (props) => {

  let activeClassName = 'SampleList';
  if (props.openList === true ){
    activeClassName += 'IsOpen';
  } else {
    activeClassName = 'SampleList';
  }

  return(
    <ul className={activeClassName}>

      <li className={activeClassName + '__head'}>
        <span className= {activeClassName+ "__head--item"}>
          サンプル
        </span>
      </li>

      <li className={activeClassName + "__item"}>
        <span className={activeClassName + "__item--left"}>
          ビール
        </span>
        <span className={activeClassName + "__item--rigth"}>
          40％
        </span>
      </li>

      <li className={activeClassName + "__item"}>
        <span className={activeClassName + "__item--left"}>
          ウイスキー
        </span>
        <span className={activeClassName + "__item--rigth"}>
          40％
        </span>
      </li>

      <li className={activeClassName + "__item"}>
        <span className={activeClassName + "__item--left"}>
          ウォッカ,ジン<br/>ラム,テキーラ
        </span>
        <span className={activeClassName + "__item--rigth"}>
          40%
        </span>
      </li>

      <li className={activeClassName + "__item"}>
        <span className={activeClassName + "__item--left"}>
          焼酎
        </span>
        <span className={activeClassName + "__item--rigth"}>
          25%
        </span>
      </li>

      <li className={activeClassName + "__item"}>
        <span className={activeClassName + "__item--left"}>
          リキュール
        </span>
        <span className={activeClassName + "__item--rigth"}>
          15％～40％
        </span>
      </li>

    </ul>

  )

}

export default SampleList