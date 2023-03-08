import React from "react";
import HeaderBox from "@/components/HeaderTop/HeaderBox";
import HeroBox from "@/components/Hero/HeroBox";
import AboutBox from "@/components/About/AboutBox";
import PortfolioBox from "@/components/Portfolio2/PortfolioBox";
import ClientsBox from "@/components/Clients/ClientsBox";
import ContactBox from "@/components/Contact/ContacBox";
import FooterBox from "@/components/Footer/FooterBox";
import Header from "@/components/Header/Header";
import About from "@/components/AboutMe/About";
import Nav from "@/components/Nav/nav";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/ContactMe/Contact";
const PageHome = () => {
  return (
    <>
      <HeaderBox />
      <Header />
      {/* <Nav /> */}
      <About />
      {/* <HeroBox /> */}
      {/* <AboutBox /> */}
      {/* <PortfolioBox /> */}
      <Portfolio />
      <ClientsBox />
      <Contact />
      {/* <ContactBox /> */}
      <FooterBox />
    </>
  );
};

export default PageHome;
