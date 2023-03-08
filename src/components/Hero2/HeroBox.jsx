import React from "react";
import { Trans, useTranslation } from "react-i18next";
import avatar from "@/assets/images/avatar.png";

const HeroBox = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-36 dark:bg-dark" id="home">
      {/* <!-- HERO --> */}
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              {t("HeroBox_Title")}
              <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                Abdul Aziz
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-secondary dark:text-slate-500 lg:text-2xl">
              <Trans components={{ i: <i /> }}>{t("HeroBox_Subtitle")}</Trans>
            </h2>
            <p className="mb-9 font-medium italic leading-relaxed text-secondary dark:text-slate-500">
              "{t("HeroBox_Description")}"
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >
              {t("HeroBox_Contactme")}
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src={avatar}
                alt="profilepicture"
                className="relative z-10 mx-auto max-w-full"
              />
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#3b82f6"
                    d="M48.6,-16.3C57.9,12.9,56.9,44.9,39.4,58.7C21.9,72.4,-12,67.9,-32.8,51.3C-53.5,34.8,-61,6.3,-53.3,-20.7C-45.7,-47.6,-22.8,-73,-1.6,-72.5C19.6,-72,39.3,-45.5,48.6,-16.3Z"
                    transform="translate(100 100)"
                    scale={1.1}
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /HERO --> */}
    </section>
  );
};

export default HeroBox;
