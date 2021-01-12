import * as React from 'react';
import ResultTable from './ResultTable';


const ResultArea = (props) => {

  const aclNum = Number(props.resultPercent);
  console.log(aclNum);
  let judgeText;
  if (aclNum < 8) {
    judgeText = "低い";
  } else if (8 <= aclNum && aclNum < 25) {
    judgeText = '普通';
  } else if (25 <= aclNum) {
    judgeText = '高い';
  }

  return(

    <div className="ResultArea contents">


      <ul className="ResultArea__resultBox">
        <li className="ResultArea__headBox">
          <h1 className="ResultArea__headBox--heading">計算結果</h1>
        </li>

        <li className="ResultArea__body">
          <p className="ResultArea__body--numberText">このカクテルのアルコール度数は</p>
          <p className="ResultArea__body--percent">{props.resultPercent} <span className="unit">%</span> </p>
          <p className="ResultArea__body--highlow">
            アルコール度数 : <span className="judgment">{judgeText}</span>
          </p>
        </li>
      </ul>{/* ResultArea__resultBox */}


      {/* 使用アイテム表 */}
          <ResultTable
            arrayName={props.arrayName}
            arrayAmount={props.arrayAmount}
            arrayPercent={props.arrayPercent}
          />

    {/* ResultArea */}</div>
  )
}

export default ResultArea