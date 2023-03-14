import React, { Suspense } from "react";
import CTA from "./CTA";
import ME from "@/assets/images/me.svg";
import SMALL from "@/assets/images/me/aku300.webp";
import HeroSocials from "./HeroSocials";
import { Trans, useTranslation } from "react-i18next";

const HeroBox = () => {
  const { t } = useTranslation();
  return (
    <section
      className="h-[850px] overflow-hidden pt-[5rem] dark:bg-dark sm:pt-[6.5rem] lg:h-[880px]"
      id="home"
    >
      <div className="hero__container container rounded-t-full dark:bg-dark">
        <h1
          className="text-[1em] font-medium  text-primary dark:text-white sm:text-lg"
          data-aos="fade-up-right"
          data-aos-duration="800"
        >
          {t("HeroBox_Title")}
        </h1>
        <h2
          className="text-[2.5rem] font-medium text-primary dark:text-white"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          Abdul Aziz
        </h2>
        <h3
          className="text-secondary"
          data-aos="fade-up-left"
          data-aos-duration="800"
        >
          <Trans components={{ i: <i /> }}>{t("HeroBox_Subtitle")}</Trans>
        </h3>
        <CTA />
        <HeroSocials />

        <div className="me" data-aos="fade-down" data-aos-duration="1500">
          <Suspense fallback={<div>Loading...</div>}>
            <img
              placeholder={SMALL}
              src={ME}
              alt="me"
              height={960}
              width={633}
            />
          </Suspense>
        </div>

        <a
          href="#contact"
          aria-label="cp"
          className="scroll__down text-secondary dark:text-primary"
        >
          {t("HeroBox_Scroll")}
        </a>
      </div>
    </section>
  );
};

export default HeroBox;
