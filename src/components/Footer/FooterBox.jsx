import React from "react";
import { Trans, useTranslation } from "react-i18next";
import LOGO from "@/assets/images/logo.webp";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const FooterBox = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark pt-24 pb-12 dark:bg-primary">
      {/* <!-- FOOTER --> */}
      <div className="container">
        <div className="flex flex-wrap">
          <div
            className="mb-12 w-full px-4 text-center font-medium text-slate-200 sm:text-left md:w-1/3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <img
                src={LOGO}
                alt="logo"
                className="mx-auto mb-4 h-14 rounded-md bg-dark p-2 sm:mx-0"
              />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">Abdul Aziz</h2>
            <h3 className="mb-2 text-xl font-bold">{t("Contact_SubTitle")}</h3>
            <p className="mb-2">
              <a href="mailto:abaz.my.id@gmail.com" target="_blank"></a>
              abaz.my.id@gmail.com
            </p>
            <p>{t("Footer_Addres")}</p>
            <p>{t("Footer_Location")}</p>
          </div>
          <div
            className="mb-12 w-full px-4 text-slate-300 md:w-1/3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h3 className="mb-5 border-b border-slate-600 text-center text-2xl font-semibold text-white">
              <Trans components={{ i: <i /> }}>{t("Main_Tech")}</Trans>
            </h3>
            <div className="flex flex-wrap">
              <ul className="w-1/2 pl-6 text-left">
                <li>
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    NodeJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    VueJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    Rect & React Native
                  </a>
                </li>
              </ul>
              <ul className="w-1/2 pr-6 text-right text-slate-300">
                <li>
                  <a
                    href="https://www.electronjs.org/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    ElectronJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.postgresql.org/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    PostgreSQL
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    MongoDB
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                  >
                    TailwindCSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mb-12 w-full px-4 text-center text-slate-300 md:w-1/3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h3 className="mb-5 border-b border-slate-600 text-2xl font-semibold text-white">
              Menu
            </h3>
            <ul className="text-slate-200">
              <li>
                <a
                  href="#home"
                  className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                >
                  {t("Nav_Home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                >
                  {t("Nav_About")}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                >
                  {t("Nav_Portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                >
                  {t("Nav_Clients")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mb-6 inline-block text-base text-slate-200 hover:text-primary sm:mb-3"
                >
                  {t("Nav_Contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="w-full border-t border-slate-600 pt-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="mb-5 flex items-center justify-center">
            {/* Github */}
            <a
              href="https://github.com/abaz1d"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary"
            >
              <FaGithub className="h-6 w-6 fill-current" />
            </a>
            {/* /Github */}
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/abaz-id/"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary hover:text-white"
            >
              <BsLinkedin className="h-5 w-5 fill-current" />
            </a>
            {/* /Linkedin */}
            {/* Gmail */}
            <a
              href="mailto:abaz.my.id@gmail.com"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FiMail className="h-5 w-5 fill-dark dark:fill-primary" />
            </a>
            {/* /Gmail */}
            {/* Youtube */}
            <a
              href="https://www.youtube.com/channel/UCYa4Il5c059G3y93C1vU5DQ"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaYoutube className="fill-current" />
            </a>
            {/* /Youtube */}
          </div>
          <p className="mb-8 text-center text-sm font-medium text-white sm:mb-0">
            <Trans components={{ a: <a /> }}>{t("Footer_Author")}</Trans>
          </p>
        </div>
      </div>
      {/* <!-- /FOOTER --> */}
    </footer>
  );
};

export default FooterBox;
