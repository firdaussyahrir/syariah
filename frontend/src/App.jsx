import { Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Regulasi from "./pages/regulasi/Regulasi";
import Dps from "./pages/dps/Dps";
import Lrsa from "./pages/lrsa/Lrsa";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <div className="flex flex-1">
        <Sidebar />
        <div className="ml-64 mt-4 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dps" element={<Dps />} />
            <Route path="/lrsa" element={<Lrsa />} />
            <Route path="/regulasi" element={<Regulasi />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
