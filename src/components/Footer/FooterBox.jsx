import React from "react";
import { Trans, useTranslation } from "react-i18next";

const FooterBox = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark pt-24 pb-12">
      {/* <!-- FOOTER --> */}
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h2 className="mb-5 text-4xl font-bold text-white">Abdul Aziz</h2>
            <h3 className="mb-2 text-2xl font-bold">{t("Contact_SubTitle")}</h3>
            <p className="mb-2">
              <a href="mailto:abaz.my.id@gmail.com" target="_blank"></a>
              abaz.my.id@gmail.com
            </p>
            <p>{t("Footer_Addres")}</p>
            <p>{t("Footer_Location")}</p>
          </div>
          <div className="mb-12 w-full px-4 text-slate-300 md:w-1/3">
            <h3 className="mb-5 border-b border-slate-600 text-center text-2xl font-semibold text-white">
              <Trans components={{ i: <i /> }}>{t("Main_Tech")}</Trans>
            </h3>
            <div className="flex flex-wrap">
              <ul className="w-1/2 pl-6 text-left text-slate-300">
                <li>
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    NodeJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    VueJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    className="mb-3 inline-block text-base hover:text-primary"
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
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    ElectronJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.postgresql.org/"
                    target="_blank"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    PostgreSQL
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    MongoDB
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    TailwindCSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-12 w-full px-4 text-center text-slate-300 md:w-1/3">
            <h3 className="mb-5 border-b border-slate-600 text-2xl font-semibold text-white">
              Menu
            </h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  {t("Nav_Home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  {t("Nav_About")}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  {t("Nav_Portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  {t("Nav_Clients")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  {t("Nav_Contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border-t border-slate-600 pt-10">
          <div className="mb-5 flex items-center justify-center">
            {/* Github */}
            <a
              href="https://github.com/abaz1d"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary"
            >
              <svg
                className="h-6 w-6 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            {/* /Github */}
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/abaz-id/"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg
                className="h-5 w-5 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* /Linkedin */}
            {/* Gmail */}
            <a
              href="mailto:abaz.my.id@gmail.com"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg
                className="h-5 w-5 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
            {/* /Gmail */}
            {/* Youtube */}
            <a
              href="https://www.youtube.com/channel/UCYa4Il5c059G3y93C1vU5DQ"
              target={"_blank"}
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-white opacity-60 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg
                className="fill-current"
                width={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* /Youtube */}
          </div>
          <p className="text-center text-sm font-medium text-slate-500">
            <Trans components={{ a: <a /> }}>{t("Footer_Author")}</Trans>
          </p>
        </div>
      </div>
      {/* <!-- /FOOTER --> */}
    </footer>
  );
};

export default FooterBox;
