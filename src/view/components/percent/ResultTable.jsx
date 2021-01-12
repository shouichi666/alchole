import React from "react";

const ResultTable = (props) => {
  const name = props.arrayName;
  const amount = props.arrayAmount;
  const percent = props.arrayPercent;

  let tableRow = [];
  for (let i = 0; i < name.length; i++) {
    tableRow.push(
      <tr key={i}>
        <td>{name[i]}</td>
        <td>{amount[i]}ml</td>
        <td>{percent[i]}%</td>
      </tr>
    );
  }

  return (
    <table className="ResultTable">
      <thead className="ResultTable__thead">
        <tr>
          <th>アイテム</th>
          <th>分量/㎖</th>
          <th>アルコール度数/%</th>
        </tr>
      </thead>

      <tbody className="ResultTable__tbody">{tableRow}</tbody>
    </table>
  );
};

export default ResultTable;
