import Routes from "./router/Routes.jsx";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import ToggleMode from "./components/ToggleMode.jsx";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes />
      <ToggleMode />
      <ScrollToTop />
    </>
  );
}

export default App;
