import React from "react";
import HeaderBox from "@/components/Header/HeaderBox";
import HeroBox from "@/components/Hero/HeroBox";
import AboutBox from "@/components/About/AboutBox";
import PortfolioBox from "@/components/Portfolio/PortfolioBox";
import ClientsBox from "@/components/Clients/ClientsBox";
import ContactBox from "@/components/Contact/ContactBox";
import FooterBox from "@/components/Footer/FooterBox";
import { useEffect, useState } from "react";
const PageHome = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);
  if (loading) {
    return (
      <div className="intro-y fixed top-0 left-0 right-0 bottom-0 z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-slate-500 opacity-80">
        <span className="relative flex h-10 w-10 items-center justify-center">
          <span className="absolute inline-flex h-1/2 w-1/2 animate-[ping_0.6s_ease-out_infinite] rounded-full bg-sky-300 opacity-75"></span>
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 motion-safe:animate-[ping_1s_ease-out_infinite]"></span>
        </span>
      </div>
    );
  } else {
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
  }
};

export default PageHome;
