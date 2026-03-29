import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import { Sun, Moon,MoveRight } from "lucide-react";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(ViewContext);
  const Nav_Links = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  return (
    <>
      <div
        className={`h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Navbar */}
        <div
          className={`fixed top-0 left-0 right-0 w-full h-30 flex items-center justify-between px-18 border-b ${darkMode ? "border-white/20" : "border-black/20"}`}
        >
          <h1 className="text-3xl font-black playfair-font">MP.</h1>
          <div className="h-full flex items-center gap-15 mt-2">
            {Nav_Links.map((link) => (
              <>
                <React.Fragment key={link}>
                  <a
                    onClick={() => {
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-lg font-bold playfair-font pb-1 cursor-pointer"
                    style={{
                      borderBottom: `1px solid ${darkMode ? "transparent" : "transparent"}`,
                      transition: "border-color 500ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.borderBottomColor = darkMode
                        ? "white"
                        : "black")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.borderBottomColor = "transparent")
                    }
                  >
                    {link}
                  </a>
                </React.Fragment>
              </>
            ))}
          </div>
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
      </div>
    </>
  );
};

export default Home;
