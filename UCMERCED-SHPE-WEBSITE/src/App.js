import React from "react";
import Alumni from "./Alumni/Alumni";
import Home from "./Home/Home";
import Initiatives from "./Initiatives/Initiatives";
import EBoard from "./EBoard/EBoard";
import Values from "./Values/Values";


import Join from "./Join/Join";
import Contact from "./Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* create a route for Values */}
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/eboard" element={<EBoard />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/values" element={<Values />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
