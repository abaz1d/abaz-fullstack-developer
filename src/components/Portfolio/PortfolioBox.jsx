import React from "react";
import { useTranslation } from "react-i18next";
import IMG1 from "@/assets/images/portfolio/project1.svg";
import IMG2 from "@/assets/images/portfolio/project2.svg";
import IMG3 from "@/assets/images/portfolio/project3.svg";
import IMG4 from "@/assets/images/portfolio/project4.svg";
import IMG5 from "@/assets/images/portfolio/project5.svg";
import IMG6 from "@/assets/images/portfolio/project6.svg";

const PortfolioBox = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="dark:bg-dark sm:pt-24 sm:pb-24">
      <h2
        className="text-center text-[1em] font-medium  text-secondary dark:text-white sm:text-lg"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("Portfolio_SubTitle")}
      </h2>
      <h3
        className="mb-12 text-center text-[2em] font-medium text-primary"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {t("Nav_Portfolio")}
      </h3>

      <div className="portfolio__container container">
        <article
          className="portfolio__item cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="portfolio__item-image">
            <img
              src={IMG1}
              alt="project1"
              loading="lazy"
              width={483}
              height={364}
            />
          </div>
          <h3 className="text-center"> {t("p1_name")}</h3>

          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Koperasi-App-ElectronJS"
              aria-label="portfolio"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Koperasi-App-ElectronJS"
              aria-label="portfolio"
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
            <img
              src={IMG2}
              alt="project2"
              loading="lazy"
              width={483}
              height={364}
            />
          </div>
          <h3 className="text-center">{t("p2_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Tech-Anlimitid"
              aria-label="portfolio"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="http://153.92.210.7:3003/"
              aria-label="portfolio"
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
            <img
              src={IMG3}
              alt="project3"
              loading="lazy"
              width={483}
              height={364}
            />
          </div>
          <h3 className="text-center">{t("p3_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/POS-LurikRachmad-Vue-3"
              aria-label="portfolio"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/POS-LurikRachmad-Vue-3/blob/main/README.md"
              aria-label="portfolio"
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
            <img
              src={IMG4}
              alt="project4"
              loading="lazy"
              width={483}
              height={364}
            />
          </div>
          <h3 className="text-center">{t("p4_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/BiroUmrah"
              aria-label="portfolio"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/BiroUmrah"
              aria-label="portfolio"
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
            <img
              src={IMG5}
              alt="project5"
              loading="lazy"
              width={483}
              height={364}
            />
          </div>
          <h3 className="text-center">{t("p5_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Chat-Vue3-Mongoose"
              aria-label="portfolio"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Chat-Vue3-Mongoose#readme"
              aria-label="portfolio"
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
            <img
              src={IMG6}
              alt="project6"
              loading="lazy"
              width={483}
              height={364}
            />
          </div>
          <h3 className="text-center">{t("p6_name")}</h3>
          <div className="portfolio__item-cta justify-center">
            <a
              href="https://github.com/abaz1d/Laundry-App"
              aria-label="portfolio"
              target={"_blank"}
              className="rounded-md border-2 border-primary bg-white py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg dark:bg-transparent"
            >
              Github
            </a>
            <a
              href="https://github.com/abaz1d/Laundry-App#readme"
              aria-label="portfolio"
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
