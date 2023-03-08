import React from "react";
import HeaderBox from "@/components/Header/HeaderBox";
import HeroBox from "@/components/Hero/HeroBox";
import AboutBox from "@/components/About/AboutBox";
import PortfolioBox from "@/components/Portfolio/PortfolioBox";
import ClientsBox from "@/components/Clients/ClientsBox";
import ContactBox from "@/components/Contact/ContactBox";
import FooterBox from "@/components/Footer/FooterBox";
const PageHome = () => {
  return (
    <>
      <HeaderBox />
      <HeroBox />
      <AboutBox />
      <PortfolioBox />
      <ClientsBox />
      <ContactBox />
      <FooterBox />
    </>
  );
};

export default PageHome;
