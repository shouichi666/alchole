import * as React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/alc_log.png';


const Top = () => {
  return(
    <article className="topPage">
        <img src={img} alt="logo" />
        <div className="topPage__linkContents">
          <Link
            to="/a/input"
            className="topPage__linkButton"
          >
            アルコール度数
          </Link>

          <Link
            to="/dissolves/top"
            className="topPage__linkButton"
          >
            アルコール分解時間
          </Link>

          <Link
            to="search/Choose"
            className="topPage__linkButton"
          >
            検索
          </Link>
        </div>
    </article>
  )
}

export default Top 