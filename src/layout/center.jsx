import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Center() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Center;
