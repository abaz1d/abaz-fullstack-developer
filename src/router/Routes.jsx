import React from "react";
import PageHome from "@/views/PageHome.jsx";
import NotFound from "@/views/NotFound.jsx";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import ScrollTopBehaviour from "@/components/ScrollTopBehaviour";
const Routes = () => {
  return (
    <>
      <BrowserRouter basename="/abaz-fullstack-developer/">
        <ScrollTopBehaviour />
        <Switch>
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
