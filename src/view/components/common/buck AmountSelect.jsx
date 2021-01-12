import React from "react";

const AmountSelect = (props) => {
  const ML = [<option value="0" selected>選択してください。</option>];
  const amountMl = () => {
    for (let i = 30; i < 120; i += 0.5) {
      ML.push(<option value={i}>{i}ml</option>);
    }
  };
  const amountKan = () => {
      for (let i = 1; i < 10; i++) {
          let value = 350 * i;
          ML.push(<option value={value}>{i}缶 ({value}ml)</option>);
    }
  };
  const amountGlass = () => {
      for (let i = 1; i < 10; i++) {
        let value = 120 * i;
        ML.push(<option value={value}>{i}杯 ({value}ml)</option>);
    }
  };
  const amountSake = () => {
      for (let i = 1; i < 10; i++) {
          let gou = 180 * i;
          ML.push(<option value={gou}>{i}合 ({gou}ml)</option>);
    }
  };
    props.amountType === 1 ? amountMl() :
        props.amountType === 2 ? amountKan() :
            props.amountType === 3 ? amountGlass() :
                props.amountType === 4 ? amountSake() :
                    console.log("EEEEEEEE");

  return (
    <ul className="amountList">
        {ML}
    </ul>
    // <>
    //   <label htmlFor={props.n}>amount</label>
    //   <select id={props.n} onChange={props.onChange} name={props.n}>
    //     {ML}
    //   </select>
    // </>
  );
};

export default AmountSelect;
