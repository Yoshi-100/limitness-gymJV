import React from "react";
import "../App.scss"; // 共通スタイルをインポート
import image from "../assets/image.jpg";  // 仮画像

function Home() {
  return (
    <div className="home-page">
      <section className="hero position-relative text-white text-center" style={{ background: "url(" + image + ") center/cover no-repeat", height: "80vh" }}>
        <div className="overlay" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)" }}></div>
        <div className="hero-content position-relative container h-100 d-flex flex-column justify-content-center">
          <h2 className="display-4 fw-bold">あなたの限界を超える</h2>
          <p className="lead">最先端の設備と洗練されたプログラムで、新たな自分に挑戦してください。</p>
          <a href="/reservation" className="btn btn-primary btn-lg mt-3">今すぐ予約する</a>
        </div>
      </section>
      
      <section className="py-5">
        <div className="container">
          <h3 className="mb-4 text-center">特徴</h3>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-speedometer2" style={{fontSize: "3rem"}}></i>
              <h5 className="mt-3">最新設備</h5>
              <p>業界最先端のマシンとトレーニング設備を完備しています。</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-people" style={{fontSize: "3rem"}}></i>
              <h5 className="mt-3">プロのサポート</h5>
              <p>経験豊富なトレーナーによるサポートで目標達成をサポートします。</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-calendar-check" style={{fontSize: "3rem"}}></i>
              <h5 className="mt-3">柔軟なスケジュール</h5>
              <p>24時間稼働とオンライン予約で、あなたのライフスタイルに合わせた利用が可能です。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
