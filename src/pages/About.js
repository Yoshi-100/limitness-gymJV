import React from "react";
import image from "../assets/image.jpg"; // 仮画像

function About() {
  return (
    <div className="about-page container my-5">
      <h2 className="mb-4 text-center">ジム概要</h2>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={image} alt="ジムの内観" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h4>リミットネス Gym の特長</h4>
          <p>
            リミットネス Gym は、最新設備と経験豊富なトレーナーにより、あなたのフィットネスライフを全力でサポートします。広いトレーニングエリア、専用器具、ヨガ・ピラティス用スタジオなど、洗練された施設環境をご提供いたします。
          </p>
          <ul>
            <li>最新マシン導入で、効果的なトレーニングを実現</li>
            <li>パーソナルトレーニングプログラムの活用</li>
            <li>柔軟な予約システムで、忙しいスケジュールにも対応</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
