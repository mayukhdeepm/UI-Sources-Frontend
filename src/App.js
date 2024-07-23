import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Filters from "./components/Filters/Filters";
import AppPage from "./components/AppPage/AppPage";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/app-page" element={<AppPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
