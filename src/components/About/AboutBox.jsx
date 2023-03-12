import React from "react";
import { Trans, useTranslation } from "react-i18next";
import xlarge from "@/assets/images/me-about/me-about3200.webp";
import large from "@/assets/images/me-about/me-about1280.webp";
import medium from "@/assets/images/me-about/me-about768.webp";
import small from "@/assets/images/me-about/me-about300.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiElectron,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const AboutBox = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="bg-slate-300 dark:bg-slate-900 sm:pt-24 sm:pb-24"
    >
      <h2
        className="mb-2 text-center text-[1em] font-semibold text-primary sm:text-lg"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("AboutBox_SubTitle")}
      </h2>
      <h3
        className="mb-12 text-center text-3xl font-bold text-dark dark:text-white sm:text-[2em]"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {t("AboutBox_Title")}
      </h3>

      <div className="about__container container">
        <div className="about__me" data-aos="fade-down" data-aos-duration="800">
          {" "}
          <div className="about__me-image grayscale hover:grayscale-0">
            <img
              src={small}
              srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`}
              alt="About image"
              loading="lazy"
              width={3264}
              height={3264}
            />
          </div>
        </div>

        <div className="about__content">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center lg:justify-start">
            <article
              className="about__card cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
              data-aos="fade-down"
              data-aos-duration="400"
            >
              <FaAward className="about__icon mx-auto" />
              <h4 className="dark:text-white">{t("AboutBox_Experience")}</h4>
              <small>{t("AboutBox_Experience2")}</small>
            </article>

            <article
              className="about__card cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
              data-aos="fade-down"
              data-aos-duration="700"
            >
              <FiUsers className="about__icon mx-auto" />
              <h4 className="dark:text-white">{t("Nav_Clients")}</h4>
              <small>{t("AboutBox_Clients2")}</small>
            </article>

            <article
              className="about__card cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <VscFolderLibrary className="about__icon mx-auto" />
              <h4 className="dark:text-white">{t("AboutBox_Projects")}</h4>
              <small>{t("AboutBox_Projects2")}</small>
            </article>
          </div>
          <p
            className="indent-8"
            //data-aos="fade-up" data-aos-duration="800"
          >
            <Trans components={{ a: <a /> }}>{t("AboutBox_Description")}</Trans>
          </p>
          <div className="w-full px-4">
            <h4
              className="ls:text-left ls:text-[2em] mb-5 text-center text-xl font-bold text-dark dark:text-white lg:text-left"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <Trans components={{ i: <i /> }}>{t("Main_Tech")}</Trans>
            </h4>
            <div className="mb-14 -ml-2 flex justify-center lg:justify-start">
              {/* JavaScript */}
              <a
                href="https://www.javascript.com/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#F7DF1E] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="300"
                rel="noreferrer"
                aria-label="techstack"
              >
                <SiJavascript className="h-7 w-7 bg-black fill-current shadow-inner shadow-slate-500 hover:bg-primary" />
              </a>
              {/* /JavaScript */}
              {/* NodeJS */}
              <a
                href="https://tailwindcss.com/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#339933] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="600"
                rel="noreferrer"
                aria-label="techstack"
              >
                <IoLogoNodejs className="h-7 w-7 fill-current" />
              </a>
              {/* /NodeJS */}
              {/* Vue.js */}
              <a
                href="https://vuejs.org/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#4FC08D] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="900"
                rel="noreferrer"
                aria-label="techstack"
              >
                <SiVuedotjs className="h-7 w-7 fill-current" />
              </a>
              {/* /Vue.js */}
              {/* React */}
              <a
                href="https://reactjs.org/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#61DAFB] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="1200"
                rel="noreferrer"
                aria-label="techstack"
              >
                <SiReact className="h-7 w-7 fill-current" />
              </a>
              {/* /React */}
              {/* ElectronJS */}
              <a
                href="https://www.electronjs.org/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#47848F] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="1500"
                rel="noreferrer"
                aria-label="techstack"
              >
                <SiElectron className="h-7 w-7 fill-current" />
              </a>
              {/* /ElectronJS */}
              {/* PostgreSQL */}
              <a
                href="https://www.postgresql.org/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#4169E1] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="1800"
                rel="noreferrer"
                aria-label="techstack"
              >
                <SiPostgresql className="h-7 w-7 fill-current" />
              </a>
              {/* /PostgreSQL */}
              {/* MongoDB */}
              <a
                href="https://www.mongodb.com/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#47A248] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="2100"
                rel="noreferrer"
                aria-label="techstack"
              >
                <SiMongodb className="h-7 w-7 fill-current" />
              </a>
              {/* /MongoDB */}
              {/* Tailwindcss */}
              <a
                href="https://tailwindcss.com/"
                target={"_blank"}
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-dark text-[#06B6D4] opacity-80 hover:border-primary hover:bg-primary hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-aos="fade-down"
                data-aos-duration="2400"
                rel="noreferrer"
                aria-label="techstack"
              >
                <SiTailwindcss className="h-7 w-7 fill-current" />
              </a>
              {/* /More */}
            </div>
          </div>
          <a
            href="#contact"
            className="mx-auto flex max-w-fit rounded-md  border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent lg:mx-0"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {t("HeroBox_Contactme")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
