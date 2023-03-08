import Routes from "./router/Routes.jsx";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./components/ScrollToTop";
import ToggleMode from "./components/ToggleMode.jsx";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="47, 164, 237"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={1.2}
      /> */}
      <Routes />
      <ToggleMode />
      <ScrollToTop />
    </>
  );
}

export default App;
