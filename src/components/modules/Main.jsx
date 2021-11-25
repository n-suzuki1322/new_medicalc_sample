import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
    return (
    <div className="main-table">
        <table>
          <thead>
            <tr>
              <th className="num-col">#</th>
              <th className="injury-name-col">負傷名</th>
              <th className="injury-date-col">負傷日</th>
              <th className="fir-ins-date-col">初検日</th>
              <th className="end-date-col">終了日</th>
              <th className="regression-col">転帰</th>
              <th className="cause-col">原因</th>
              <th className="detail-button-col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">1</td>
              <td className="injury-name">右足関節捻挫</td>
              <td className="injury-date">R18</td>
              <td className="fir-ins-date">R18</td>
              <td className="end-date"></td>
              <td className="regression">継続</td>
              <td className="cause">道路歩行中、道の凹みに足を取られて捻り転倒し負傷。</td>
              <td><a className="detail-button" href="/">詳細</a></td>
            </tr>
          </tbody>
        </table>
        <div align={"left"}>
            <button className="addButton">
                <FontAwesomeIcon icon={faPlus} color={"white"} />傷病を追加する
            </button>
        </div>
    </div>
    );
}
