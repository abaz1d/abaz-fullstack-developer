import Routes from "./router/Routes.jsx";
import React, { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const ToggleMode = lazy(() => import("./components/ToggleMode"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes />
      <Suspense>
        <ToggleMode />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
