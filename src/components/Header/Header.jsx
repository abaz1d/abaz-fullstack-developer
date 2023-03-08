import React from "react";
import CTA from "./CTA";
import ME from "@/assets/images/aku.png";
import HeaderSocials from "./HeaderSocials";
import { Trans, useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen overflow-hidden pt-[5rem] dark:bg-dark" id="home">
      <div className="hero__container container rounded-t-full dark:bg-dark">
        <h5 className="text-[0.83em] font-medium text-primary dark:text-white">
          {t("HeroBox_Title")}
        </h5>
        <h1 className="text-[2.5rem] font-medium text-primary dark:text-white">
          Abdul Aziz
        </h1>
        <h5 className="text-secondary">
          <Trans components={{ i: <i /> }}>{t("HeroBox_Subtitle")}</Trans>
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a
          href="#contact"
          className="scroll__down text-secondary dark:text-primary"
        >
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Header;
