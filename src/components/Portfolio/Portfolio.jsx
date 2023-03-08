import React from "react";
import { Trans, useTranslation } from "react-i18next";
import IMG1 from "@/assets/images/portfolio1.jpg";
import IMG2 from "@/assets/images/portfolio2.jpg";
import IMG3 from "@/assets/images/portfolio3.jpg";
import IMG4 from "@/assets/images/portfolio4.jpg";
import IMG5 from "@/assets/images/portfolio5.png";
import IMG6 from "@/assets/images/portfolio6.jpg";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="dark:bg-dark sm:pt-24 sm:pb-24">
      <h5 className="text-center text-[0.83em] font-medium text-secondary dark:text-white">
        {t("Portfolio_SubTitle")}
      </h5>
      <h2 className="mb-12 text-center text-[1.5em] font-medium text-primary">
        {t("Nav_Portfolio")}
      </h2>

      <div className="portfolio__container container">
        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3 className="text-center">This is portfolio item title</h3>

          <div className="portfolio__item-cta justify-center">
            <a
              href="#"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="#"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3 className="text-center">This is portfolio item title</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="#"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="#"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3 className="text-center">This is portfolio item title</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="#"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="#"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3 className="text-center">This is portfolio item title</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="#"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="#"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3 className="text-center">This is portfolio item title</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="#"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="#"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3 className="text-center">This is portfolio item title</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="#"
              download
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="#"
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
