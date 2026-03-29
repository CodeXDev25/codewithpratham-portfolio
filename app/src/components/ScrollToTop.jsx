import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ROUTE_TITLES = {
  "/":            "Home",
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const page = ROUTE_TITLES[pathname] ?? toTitleCase(pathname.replace("/", ""));
    document.title = page
      ? `Mangnale Prathamesh | Portfolio`
      : "Mangnale Prathamesh | Portfolio";
  }, [pathname]);

  return null;
};

const toTitleCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export default ScrollToTop;