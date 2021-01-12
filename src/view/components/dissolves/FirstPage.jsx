import React from "react";
import Button from "../common/Button";

const FirstPage = (props) => {
  // const nextPage = () => {
  //   this.props.history.push("/dissolves/last");
  // };
  return (
    <div className="contents FirstPage">
      <h2>
        アルコール分解時間、
        <br />
        血中濃度の簡易的な計算します。
      </h2>
      <div className="FirstPage__textBox">
        <p className="FirstPage__textBox--nomalText">
          二日酔いを防ぐには予めアルコール取得量を控えることが大事です。
          <br />
          また、万が一飲み過ぎた場合でも就寝前に十分な水分を摂取することで二日酔いを予防する効果があります。
        </p>
        <p className="FirstPage__textBox--changeText">
          ※アルコール消化時間、血中アルコール濃度とも個人差が大きいため、あくまで簡易的な目安となります。
        </p>
      </div>
      <div className="FirstPage__clacText">
        <p>分解時間/h = </p>
        <p> 純アルコール摂取量 × 1hあたりの分解出来るアルコール量</p>
      </div>
      <Button
        onClick={props.onClick}
        text="計算しに行く"
        name="first"
        className="nomalButton fixedButton"
      />
    </div>
  );
};

export default FirstPage;
