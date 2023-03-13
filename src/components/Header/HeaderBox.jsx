import React, { useEffect, useState } from "react";
import LOGO from "@/assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { HiTranslate } from "react-icons/hi";

const HeaderBox = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(false);

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
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("-translate-y-[100vh]");
    });
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", navHighlighter);
    function navHighlighter() {
      let scrollY = window.pageYOffset;
      sections.forEach((current) => {
        var sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector("#nav-menu a[href*=" + sectionId + "]")
            .classList.add("bg-primary");
        } else {
          document
            .querySelector("#nav-menu a[href*=" + sectionId + "]")
            .classList.remove("bg-primary");
        }
      });
    }
  }, []);
  const DropdownLang = () => {
    setLang(() => !lang);
  };
  const onChangeLang = (e) => {
    // let lng = event.target.value;
    i18n.changeLanguage(e);
  };
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4" data-aos="fade-right" data-aos-duration="1500">
            <a
              href="javascript:location.reload(true)"
              aria-label="nav"
              className="block py-6 text-lg  font-bold text-primary"
            >
              <img
                src={LOGO}
                alt="logo"
                className="-my-4 mr-20 h-12"
                width={48}
                height={48}
              />
            </a>
          </div>
          <div
            className="flex items-center px-4"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <button
              id="hamburger-btn"
              type="button"
              className="absolute right-4 block lg:hidden"
              aria-label="hamburger"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className="duration-900 absolute left-0 top-full w-full -translate-y-[100vh] transform rounded-lg border border-primary bg-gray-50 py-5 text-lg shadow-lg transition-all dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:translate-y-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
            >
              <ul className="flex flex-col lg:mt-0 lg:flex-row lg:space-x-5 lg:text-sm lg:font-medium">
                <li className="group flex text-center">
                  <a
                    href="#home"
                    aria-label="nav"
                    className="mx-4 w-full rounded-md border-2 border-transparent py-2 px-4 text-base text-dark hover:border-primary group-hover:bg-transparent group-hover:text-primary dark:text-white lg:mx-auto lg:min-w-fit"
                  >
                    {t("Nav_Home")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#about"
                    aria-label="nav"
                    className="mx-4 w-full rounded-md border-2 border-transparent py-2 px-4 text-base text-dark hover:border-primary group-hover:bg-transparent group-hover:text-primary dark:text-white lg:mx-auto lg:min-w-fit"
                  >
                    {t("Nav_About")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#portfolio"
                    aria-label="nav"
                    className="mx-4 w-full rounded-md border-2 border-transparent py-2 px-4 text-base text-dark hover:border-primary group-hover:bg-transparent group-hover:text-primary dark:text-white lg:mx-auto lg:min-w-fit"
                  >
                    {t("Nav_Portfolio")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#clients"
                    aria-label="nav"
                    className="mx-4 w-full rounded-md border-2 border-transparent py-2 px-4 text-base text-dark hover:border-primary group-hover:bg-transparent group-hover:text-primary dark:text-white lg:mx-auto lg:min-w-fit"
                  >
                    {t("Nav_Clients")}
                  </a>
                </li>
                <li className="group flex text-center">
                  <a
                    href="#contact"
                    aria-label="nav"
                    className="mx-4 w-full rounded-md border-2 border-transparent py-2 px-4 text-base text-dark hover:border-primary group-hover:bg-transparent group-hover:text-primary dark:text-white lg:mx-auto lg:min-w-fit"
                  >
                    {t("Nav_Contact")}
                  </a>
                </li>
                <li className="group mx-auto flex items-center">
                  <button
                    onClick={DropdownLang}
                    id="translate-btn"
                    className="mx-auto hidden w-full items-center rounded-md border-2 border-transparent py-2 px-4 text-center text-base text-dark hover:border-primary group-hover:bg-transparent group-hover:text-primary dark:text-white lg:flex"
                  >
                    <HiTranslate className="mr-1 h-6 w-6 dark:text-white" />
                    <span className=" inline-block text-base text-dark dark:text-white">
                      {i18n.language !== "id" ? "EN" : "ID"}
                    </span>
                    <span
                      className={
                        "ml-3 mr-1 -mt-1 h-2 w-2 rotate-45 border-b-[2px] border-r-[2px] transition-all duration-500 group-hover:border-primary" +
                        (lang
                          ? " mt-1 rotate-[225deg] border-primary"
                          : " border-dark dark:border-white")
                      }
                    ></span>
                  </button>
                  <div
                    className={
                      "duration-900 absolute top-24 right-0 z-10 w-56 origin-top-right transform rounded-md border-2 bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-primary dark:bg-dark dark:shadow-slate-500" +
                      (lang ? " translate-y-0" : " -translate-y-[100vh]")
                    }
                    tabIndex="-1"
                  >
                    <ul className="flex flex-col">
                      <li
                        onClick={() => onChangeLang("id")}
                        className={
                          "mx-auto flex w-full cursor-pointer justify-center rounded-md border-2 border-transparent py-2 text-base text-dark no-underline decoration-primary underline-offset-4 transition-all hover:border-primary hover:bg-transparent hover:underline dark:text-white" +
                          (i18n.language === "id" ? " bg-primary" : "")
                        }
                      >
                        Bahasa Indonesia
                      </li>
                      <li
                        onClick={() => onChangeLang("en-Us")}
                        className={
                          "mx-auto flex w-full cursor-pointer justify-center rounded-md border-2 border-transparent py-2 text-base text-dark no-underline decoration-primary underline-offset-4 hover:border-primary hover:bg-transparent hover:underline dark:text-white" +
                          (i18n.language !== "id" ? " bg-primary" : "")
                        }
                      >
                        English
                      </li>
                    </ul>
                  </div>
                  <div className="mx-4 flex w-full items-center rounded-md border-2 border-transparent py-2 px-4 text-center text-base text-dark">
                    <HiTranslate className="mr-2 h-6 w-6 dark:text-white lg:hidden" />
                    <div className="rounded-full bg-gray-300 px-3 py-2 text-center lg:hidden">
                      <button
                        className={
                          " inline-block rounded-full px-8 py-1 text-base font-semibold uppercase lg:hidden lg:bg-transparent lg:px-0 lg:py-0" +
                          (i18n.language == "id" ? " bg-primary" : "bg-dark")
                        }
                        onClick={() => onChangeLang("id")}
                      >
                        ID
                      </button>
                      <button
                        className={
                          " inline-block rounded-full px-8 py-1 text-base font-semibold uppercase lg:hidden lg:bg-transparent lg:px-0 lg:py-0" +
                          (i18n.language !== "id" ? " bg-primary" : "bg-dark")
                        }
                        onClick={() => onChangeLang("en-US")}
                      >
                        EN
                      </button>
                    </div>
                  </div>
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
