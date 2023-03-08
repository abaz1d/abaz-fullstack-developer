import React from "react";
import { useTranslation } from "react-i18next";
import IMG1 from "@/assets/images/portfolio/portfolio1.webp";
import IMG2 from "@/assets/images/portfolio/portfolio2.webp";
import IMG3 from "@/assets/images/portfolio/portfolio3.webp";
import IMG4 from "@/assets/images/portfolio/portfolio4.webp";
import IMG5 from "@/assets/images/portfolio/portfolio5.webp";
import IMG6 from "@/assets/images/portfolio/portfolio6.webp";

const PortfolioBox = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="dark:bg-dark sm:pt-24 sm:pb-24">
      <h5
        className="text-center text-[1em] font-medium  text-secondary dark:text-white sm:text-lg"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("Portfolio_SubTitle")}
      </h5>
      <h2
        className="mb-12 text-center text-[2em] font-medium text-primary"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {t("Nav_Portfolio")}
      </h2>

      <div className="portfolio__container container">
        <article
          className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project1" loading="lazy" />
          </div>
          <h3 className="text-center"> {t("p1_name")}</h3>

          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Koperasi-App-ElectronJS"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Koperasi-App-ElectronJS"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article
          className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project2" loading="lazy" />
          </div>
          <h3 className="text-center">{t("p2_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Tech-Anlimitid"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="http://153.92.210.7:3003/"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article
          className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project3" loading="lazy" />
          </div>
          <h3 className="text-center">{t("p3_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/POS-LurikRachmad-Vue-3"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/POS-LurikRachmad-Vue-3/blob/main/README.md"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article
          className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project4" loading="lazy" />
          </div>
          <h3 className="text-center">{t("p4_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/BiroUmrah"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/BiroUmrah"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article
          className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="portfolio__item-image">
            <img src={IMG5} alt="project5" loading="lazy" />
          </div>
          <h3 className="text-center">{t("p5_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Chat-Vue3-Mongoose"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Chat-Vue3-Mongoose#readme"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
            >
              Detail
            </a>
          </div>
        </article>

        <article
          className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="portfolio__item-image">
            <img src={IMG6} alt="project6" loading="lazy" />
          </div>
          <h3 className="text-center">{t("p6_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Laundry-App"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Laundry-App#readme"
              target={"_blank"}
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
