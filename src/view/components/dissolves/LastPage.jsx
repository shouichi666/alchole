import React from "react";

const LastPage = (props) => {
  const stH = Number(props.hour);
  const stM = Number(props.minit);
  const data = new Date();
  let h = data.getHours() + stH;
  let m = data.getMinutes() + stM;
  console.log(String(m));
  if (String(m).length === 1) {
    m = "0" + m;
  }
  if (h >= 24) {
    h -= 24;
  } else if (m >= 60) {
    m -= 60;
    h += 1;
  }

  let judgment = "判定結果";
  const setJudgment = (arg) => {
    if (0.02 <= arg && arg < 0.05) {
      judgment = "爽快期";
    } else if (0.05 <= arg && arg < 0.1) {
      judgment = "ほろ酔い期";
    } else if (0.1 <= arg && arg < 0.15) {
      judgment = "酩酊初期";
    } else if (0.15 <= arg && arg < 0.3) {
      judgment = "酩酊期";
    } else if (0.3 <= arg && arg < 0.4) {
      judgment = "泥酔期";
    } else if (0.4 <= arg) {
      judgment = "昏睡期";
    }
  };
  setJudgment(props.blood);

  return (
    <div className="LastPage">
      <section className="LastPage__top">
        <h1 className="LastPage__heading">アルコールの分解予定時刻</h1>
        <p className="LastPage__time">
          {h} : {m}
        </p>
        <p className="LastPage__afterTime">
          約 {props.hour} 時間 {props.minit}分後
        </p>
      </section>

      <section className="LastPage__left">
        <h1 className="LastPage__heading">摂取したアルコール量</h1>
        <p className="LastPage__amount">{props.alc}mg</p>
      </section>

      <section className="LastPage__right">
        <h1 className="LastPage__heading">血中アルコール濃度</h1>
        <p className="LastPage__amount">{props.blood}%</p>
      </section>

      <section className="LastPage__bottom">
        <h1 className="LastPage__heading">酔いの状態</h1>
        <p className="LastPage__judgment">{judgment}</p>

        {/* <div className="LastPage__border"></div> */}

        <div className="bloodTable">
          <p className="bloodTable__item">
            爽快黄
            <span className="bloodTable__item--num">0.02%</span>
          </p>
          <p className="bloodTable__item">
            ほろ酔い期
            <span className="bloodTable__item--num">0.05%</span>
          </p>
          <p className="bloodTable__item">
            酩酊初期
            <span className="bloodTable__item--num">0.10%</span>
          </p>
          <p className="bloodTable__item">
            酩酊期
            <span className="bloodTable__item--num">0.15%</span>
          </p>
          <p className="bloodTable__item">
            泥酔期
            <span className="bloodTable__item--num">0.30%</span>
          </p>
          <p className="bloodTable__item">
            昏睡期
            <br />
            死の危険がある
            <span className="bloodTable__item--num">0.40%</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LastPage;
