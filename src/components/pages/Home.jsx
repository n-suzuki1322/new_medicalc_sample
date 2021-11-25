import React from "react";
import Header from "../modules/Header";
import Top from "../modules/Top";
import Aside from "../modules/Aside";
import Main from "../modules/Main";



export default function Home() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Top />
        <div className="contents">
          <Aside name="金輪新平" nameKana="カナワ シンペイ" hokenShubetu="健康保険" hokenWariai="3" />
          <Main />
        </div>
      </div>
    </div>
  );
}
