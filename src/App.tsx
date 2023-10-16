import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharityDetail from "./components/Charities/CharityDetail";
import SearchPage from "./components/SearchPage";
import Favourite from "./components/Favourite";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charity/:slug" element={<CharityDetail />} />
          <Route path="/search/:cause" element={<SearchPage />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
