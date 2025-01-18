import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import ScheduleCall from "./pages/ScheduleCall";
import SearchPage from "./pages/SearchPage";
import WhatsAppButton from "./global/WhatsAppButton";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-a-quote" element={<GetQuote />} />
        <Route path="/schedule-call" element={<ScheduleCall />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
};

export default App;
