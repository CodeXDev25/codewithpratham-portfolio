import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import { Sun, Moon } from "lucide-react";

const DevTemplate = () => {
  const { darkMode, setDarkMode } = useContext(ViewContext);
  return (
    <>
      <div
        className={`h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 w-full h-30 flex items-center justify-between px-18">
          <h1 className="text-3xl font-black playfair-font">MP.</h1>
          <div
            className={`h-12 w-12 flex items-center justify-center border-2 ${darkMode ? "border-white hover:bg-white hover:text-black" : "border-black hover:bg-black hover:text-white"} duration-500 transition-colors cursor-pointer`}
          >
            {darkMode ? (
              <>
                <Sun onClick={() => setDarkMode((prev) => !prev)} />
              </>
            ) : (
              <>
                <Moon onClick={() => setDarkMode((prev) => !prev)} />
              </>
            )}
          </div>
        </div>

        {/* Hero */}
        <section className="py-35 px-30 flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-0.5 ${darkMode ? "bg-white" : "bg-black"}`}
              ></div>
              <h1 className="text-lg jetbrains-mono-font font-bold">
                codewithpratham.me
              </h1>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-center leading-tight playfair-font">
              Something is <br />
              <span className="text-gray-400">coming soon.</span>
            </h1>
            <p className="text-gray-600 font-mono text-lg tracking-widest uppercase mt-4">
              — Portfolio under construction —
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevTemplate;
