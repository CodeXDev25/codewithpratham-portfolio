import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import DevTemplate from "./pages/DevTemplate";
import Home from "./pages/Home";
import { ViewContext } from "./context/ViewContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
