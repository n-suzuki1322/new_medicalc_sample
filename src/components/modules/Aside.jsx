import React from "react";
import Calender from "../parts/Calender";

export default function Aside(props) {
  const name = props.name;
  const name_kana = props.nameKana;
  const hoken_shubetu = props.hokenShubetu;
  const hoken_wariai = props.hokenWariai;

  return (
    <div className="left-parts">
      <div className="pt-info">
        <p>患者情報</p>
        <button className="edit-button">編集</button>
      </div>
      <div className="pt-info-detail">
        <div>
          <p>患者番号-枝番</p>
          <div>00001 - 2</div>
        </div>
        <div>
          <p>フリガナ</p>
          <div>{name_kana}</div>
        </div>
        <div>
          <p>氏名</p>
          <div>{name}</div>
        </div>
        <div>
          <p>保険種別</p>
          <div>{hoken_shubetu}</div>
        </div>
        <div>
          <p>保険割合</p>
          <div>{hoken_wariai}割</div>
        </div>
      </div>
      <div className="calender">
        <Calender />
      </div>
      <div className="se-info">
        <div>
          <p>初検日</p>
          <div>2021年1月1日</div>
        </div>
        <div>
          <p>加算</p>
          <select name="kasan" id="kasan"></select>
        </div>
        <div>
          <p>レセプト署名</p>
          <div>
            <input type="checkbox" name="rece_check" id="rece_check" />
            <label htmlFor="rece_check">確認済み</label>
          </div>
        </div>
        <div>
          <p>保険証チェック</p>
          <div>
            <input type="checkbox" name="hoken_check" id="hoken_check" />
            <label htmlFor="hoken_check">確認済み</label>
          </div>
        </div>
        <button>その他の情報</button>
      </div>
    </div>
  );
}
