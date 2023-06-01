import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Techonology from "./components/Techonology";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeOn = darkMode ? "dark:bg-gray-900  dark:text-white" : "";

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  return (
    <div className={`${darkModeOn} `}>
      <Navber darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route
          path="/technology"
          element={<Techonology darkMode={darkMode} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
