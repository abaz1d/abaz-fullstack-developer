import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import dom from "@left4code/tw-starter/dist/js/dom";

const HeaderBox = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector("header");
      const fixNav = header.offsetTop;
      // console.log("naavbar", fixNav, window.pageYOffset, header);
      if (window.pageYOffset > fixNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };
    const hamburger = document.querySelector("#hamburger-btn");
    const navMenu = document.querySelector("#nav-menu");
    hamburger.addEventListener("click", function (e) {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
      // console.log("hamburger");
    });
  }, []);

  const onChange = (event) => {
    let lng = event.target.value;
    i18n.changeLanguage(lng);
  };
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-lg font-bold text-primary"
            >
              Abdul Aziz
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger-btn"
              type="button"
              className="absolute right-4 block lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className="absolute left-0 top-full hidden w-full rounded-lg border border-gray-100 bg-gray-50 py-5 text-lg shadow-lg dark:border-primary dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
            >
              <ul className="flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium">
                <li className="group flex text-center">
                  <a
                    href="#home"
                    className="mx-auto py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Home")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#about"
                    className="mx-auto py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_About")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#portfolio"
                    className="mx-auto py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Portfolio")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#clients"
                    className="mx-auto py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Blog")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#contact"
                    className="mx-auto py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Contact")}
                  </a>
                </li>
                <li className="group flex rounded-lg text-center dark:border-blue-800">
                  <select
                    name="language"
                    value={i18n.language}
                    onChange={onChange}
                    className="mx-auto w-[75px] cursor-pointer rounded-lg bg-white bg-opacity-0 py-2 text-base text-dark group-hover:text-primary dark:bg-dark dark:bg-opacity-0 dark:text-white"
                  >
                    <option value="id">🇮🇩 ID</option>
                    <option value="en">🇺🇸 US</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBox;
