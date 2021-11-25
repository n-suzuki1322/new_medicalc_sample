import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Top () {
return (
    <div className="top">
        <ul　className="pankuzu-list">
            <li><a href="/"><FontAwesomeIcon icon={faHome} color={"gray"} /></a></li>
            <li><a href="#">患者一覧画面</a></li>
            <li><a href="#">患者データ登録画面</a></li>
            <li><a href="#">後療画面</a></li>
            <li><a href="#">傷病一覧画面</a></li>
        </ul>
        <div className="button-list">
            <button className="jusei-button">柔整</button>
            <button className="shinkyu-button">鍼灸</button>
            <button className="masg-button">マッサージ</button>
        </div>
    </div>
    )   
}