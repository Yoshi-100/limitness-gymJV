import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// 各ページコンポーネント
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ScrollToTop />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
