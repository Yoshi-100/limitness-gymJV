import React, { useState } from "react";

function Reservation() {
  const [reservations, setReservations] = useState([]);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState("success");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    surname: "",
    fullname: "",
    gender: "",
    email: ""
  });

  const handleCheckReservation = () => {
    // 仮APIエンドポイントによるGET
    fetch("https://example.com/api/getReservationStatus")
      .then((res) => res.json())
      .then((data) => {
        // data.reservations が配列であると仮定
        setReservations(data.reservations || []);
      })
      .catch((error) => {
        console.error("Error fetching reservation status:", error);
        setStatusMsg("予約状況の取得に失敗しました。");
        setStatusType("error");
      });
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 初回予約の場合、fullnameとgenderの入力チェック
    if ((!formData.fullname || !formData.gender) && !window.confirm("初回ご利用の場合、氏名と性別の入力が必要です。本当に続行しますか？")) {
      return;
    }

    // 仮APIへのPOSTリクエスト
    fetch("https://example.com/api/createReservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatusMsg(data.message || "予約が完了しました。確認メールを送信しました。");
          setStatusType("success");
          setFormData({
            date: "",
            time: "",
            surname: "",
            fullname: "",
            gender: "",
            email: ""
          });
          // 予約状況も再取得する
          handleCheckReservation();
        } else {
          setStatusMsg(data.message || "予約に失敗しました。");
          setStatusType("error");
        }
      })
      .catch((error) => {
        console.error("Reservation error:", error);
        setStatusMsg("エラーが発生しました。");
        setStatusType("error");
      });
  };

  return (
    <div className="reservation-page container my-5">
      <h2 className="mb-4 text-center">予約管理</h2>
      
      <section className="mb-5">
        <h4>現在の予約状況</h4>
        <button className="btn btn-outline-primary mb-3" onClick={handleCheckReservation}>
          予約状況を確認する
        </button>
        {reservations.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>日付</th>
                  <th>時間</th>
                  <th>名字</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((res, index) => (
                  <tr key={index}>
                    <td>{res.date}</td>
                    <td>{res.time}</td>
                    <td>{res.surname}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>現在予約はありません。</p>
        )}
      </section>

      <section>
        <h4>新規予約</h4>
        <p>
          ※ ご予約は、まず空いている日付・時間を選び、名字（苗字）を入力してください。<br />
          初回ご利用の方は、氏名、性別、メール（任意）も入力してください。
        </p>
        { statusMsg &&
          <div className={`alert ${statusType === "success" ? "alert-success" : "alert-danger"}`}>
            {statusMsg}
          </div>
        }
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">日付を選択</label>
            <input type="date" className="form-control" id="date" name="date" required value={formData.date} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">時間を選択</label>
            <select className="form-select" id="time" name="time" required value={formData.time} onChange={handleChange}>
              <option value="">-- 時間を選択 --</option>
              <option value="06:00">06:00</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              {/* 必要に応じてさらに追加 */}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">名字（苗字）</label>
            <input type="text" className="form-control" id="surname" name="surname" placeholder="例：山田" required value={formData.surname} onChange={handleChange} />
          </div>
          <hr />
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">氏名 <small className="text-muted">(初回のみご記入ください)</small></label>
            <input type="text" className="form-control" id="fullname" name="fullname" placeholder="例：山田 太郎" value={formData.fullname} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">性別 <small className="text-muted">(初回のみご記入ください)</small></label>
            <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">-- 選択してください --</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">メール（任意）</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">予約を送信</button>
        </form>
      </section>
    </div>
  );
}

export default Reservation;
