import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import DevTemplate from "./pages/DevTemplate";
import { ViewContext } from "./context/ViewContext";

function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <>
      <ViewContext.Provider value={{darkMode, setDarkMode}}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<DevTemplate />} />
          </Routes>
        </BrowserRouter>
      </ViewContext.Provider>
    </>
  );
}

export default App;
