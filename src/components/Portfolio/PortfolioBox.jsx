import React from "react";
import { Trans, useTranslation } from "react-i18next";
import IMG1 from "@/assets/images/portfolio/portfolio1.jpeg";
import IMG2 from "@/assets/images/portfolio/portfolio2.jpeg";
import IMG3 from "@/assets/images/portfolio/portfolio3.jpeg";
import IMG4 from "@/assets/images/portfolio/portfolio4.jpeg";
import IMG5 from "@/assets/images/portfolio/portfolio5.jpeg";
import IMG6 from "@/assets/images/portfolio/portfolio6.jpeg";

const PortfolioBox = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="dark:bg-dark sm:pt-24 sm:pb-24">
      <h5 className="text-center text-[1em] font-medium  text-secondary dark:text-white sm:text-lg">
        {t("Portfolio_SubTitle")}
      </h5>
      <h2 className="mb-12 text-center text-[2em] font-medium text-primary">
        {t("Nav_Portfolio")}
      </h2>

      <div className="portfolio__container container">
        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3 className="text-center"> {t("p1_name")}</h3>

          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Koperasi-App-ElectronJS"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Koperasi-App-ElectronJS"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3 className="text-center">{t("p2_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Tech-Anlimitid"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="http://153.92.210.7:3003/"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3 className="text-center">{t("p3_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/POS-LurikRachmad-Vue-3"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/POS-LurikRachmad-Vue-3/blob/main/README.md"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3 className="text-center">{t("p4_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/BiroUmrah"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/BiroUmrah"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3 className="text-center">{t("p5_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Chat-Vue3-Mongoose"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Chat-Vue3-Mongoose#readme"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3 className="text-center">{t("p6_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Laundry-App"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Laundry-App#readme"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PortfolioBox;
