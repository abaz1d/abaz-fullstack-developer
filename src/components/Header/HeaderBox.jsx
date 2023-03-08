import React, { useEffect, useState } from "react";
import LOGO from "@/assets/images/logo.png";
import { Trans, useTranslation } from "react-i18next";

const HeaderBox = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector("header");
      const fixNav = header.offsetTop;
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
    });

    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      // Get current scroll position
      let scrollY = window.pageYOffset;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current) => {
        var sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;

        /*
          - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
          - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
          */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector("#nav-menu a[href*=" + sectionId + "]")
            .classList.add("bg-primary");
          // console.log("active", sec);
        } else {
          // console.log("remove", sectionId);
          document
            .querySelector("#nav-menu a[href*=" + sectionId + "]")
            .classList.remove("bg-primary");
        }
      });
    }
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
              <img src={LOGO} alt="logo" className="-my-4 h-12" />
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
              <ul className="flex flex-col lg:mt-0 lg:flex-row lg:space-x-6 lg:text-sm lg:font-medium">
                <li className="group flex text-center">
                  <a
                    href="#home"
                    className="mx-auto rounded-md py-2 px-4 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Home")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#about"
                    className="mx-auto rounded-md py-2 px-4 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_About")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#portfolio"
                    className="mx-auto rounded-md py-2 px-4 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Portfolio")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#clients"
                    className="mx-auto rounded-md py-2 px-4 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Clients")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#contact"
                    className="mx-auto rounded-md py-2 px-4 text-base text-dark group-hover:text-primary dark:text-white"
                  >
                    {t("Nav_Contact")}
                  </a>
                </li>
                <li className="group flex rounded-lg border-primary text-center">
                  <select
                    name="language"
                    value={i18n.language}
                    onChange={onChange}
                    className="mx-auto w-[75px] cursor-pointer rounded-lg bg-white bg-opacity-0 py-2 text-base text-dark group-hover:text-primary dark:bg-dark dark:bg-opacity-0 dark:text-white"
                  >
                    <option value="id">🇮🇩 ID</option>
                    <option value="en-US">🇺🇸 US</option>
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
