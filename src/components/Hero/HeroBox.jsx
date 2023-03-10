import React from "react";
import CTA from "./CTA";
import ME from "@/assets/images/aku.webp";
import HeroSocials from "./HeroSocials";
import { Trans, useTranslation } from "react-i18next";

const HeroBox = () => {
  const { t } = useTranslation();
  return (
    <section
      className="h-screen overflow-hidden pt-[5rem] dark:bg-dark sm:pt-[6.5rem]"
      id="home"
    >
      <div className="hero__container container rounded-t-full dark:bg-dark">
        <span
          className="text-[1em] font-medium  text-primary dark:text-white sm:text-lg"
          data-aos="fade-up-right"
          data-aos-duration="800"
        >
          {t("HeroBox_Title")}
        </span>
        <h1
          className="text-[2.5rem] font-medium text-primary dark:text-white"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          Abdul Aziz
        </h1>
        <h5
          className="text-secondary"
          data-aos="fade-up-left"
          data-aos-duration="800"
        >
          <Trans components={{ i: <i /> }}>{t("HeroBox_Subtitle")}</Trans>
        </h5>
        <CTA />
        <HeroSocials />

        <div className="me" data-aos="fade-down" data-aos-duration="1500">
          <img
            fetchpriority="high"
            src={ME}
            alt="me"
            height={1000}
            width={500}
          />
        </div>

        <a
          href="#contact"
          className="scroll__down text-secondary dark:text-primary"
        >
          {t("HeroBox_Scroll")}
        </a>
      </div>
    </section>
  );
};

export default HeroBox;