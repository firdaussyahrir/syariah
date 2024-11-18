// App.jsx
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/SecNav";
import Footer from "./components/Footer";
import Regulasi from "./pages/regulasi/Regulasi";
import Dps from "./pages/dps/Dps";
import Lrsa from "./pages/lrsa/Lrsa";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";
import Login from "./pages/user/Login";
import Riset from "./pages/riset/Riset";
import Buletin from "./pages/buletin/Buletin";
import useScrollTop from "./hooks/useScrollTop";

function App() {
  return (
    <div id="app" className="flex flex-col min-h-screen bg-white">
      <Nav />
      <div className="flex flex-1 flex-col">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dps" element={<Dps />} />
            <Route path="/lrsa" element={<Lrsa />} />
            <Route path="/regulasi" element={<Regulasi />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="/buletin" element={<Buletin />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <useScrollTop />
    </div>
  );
}

export default App;
