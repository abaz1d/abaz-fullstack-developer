import React from "react";
import { Trans, useTranslation } from "react-i18next";
import project1 from "@/assets/images/project1.png";

const PortfolioBox = () => {
  const { t } = useTranslation();
  return (
    <section
      className="bg-slate-100 pt-36 pb-16 dark:bg-slate-600"
      id="portfolio"
    >
      {/* <!-- PORTFOLIO --> */}
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              {t("Nav_Portfolio")}
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              {t("Portfolio_SubTitle")}
            </h2>
            <p className="text-md font-medium text-secondary dark:text-slate-500 md:text-lg">
              <Trans components={{ i: <i /> }}>
                {t("Portfolio_Description")}
              </Trans>
            </p>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={project1} alt="project1-idalaundry" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              {t("p1_name")}
            </h3>
            <p className="text-base font-medium text-secondary dark:text-slate-500">
              {t("p1_description")}
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={project1} alt="project1-idalaundry" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              {t("p1_name")}
            </h3>
            <p className="text-base font-medium text-secondary dark:text-slate-500">
              {t("p1_description")}
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={project1} alt="project1-idalaundry" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              {t("p1_name")}
            </h3>
            <p className="text-base font-medium text-secondary dark:text-slate-500">
              {t("p1_description")}
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={project1} alt="project1-idalaundry" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              {t("p1_name")}
            </h3>
            <p className="text-base font-medium text-secondary dark:text-slate-500">
              {t("p1_description")}
            </p>
          </div>
        </div>
      </div>
      {/* <!-- /PORTFOLIO --> */}
    </section>
  );
};

export default PortfolioBox;
