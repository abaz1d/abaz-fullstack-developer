import React from "react";
import PageHome from "@/views/PageHome.jsx";
import NotFound from "@/views/NotFound.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import ScrollTopBehaviour from "@/components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
