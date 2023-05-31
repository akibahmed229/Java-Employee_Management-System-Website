import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Techonology from "./components/Techonology";

function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Techonology />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
