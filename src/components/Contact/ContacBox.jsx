import React from "react";
import { Trans, useTranslation } from "react-i18next";

const ContactBox = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-36 pb-32 dark:bg-slate-600" id="contact">
      {/* <!-- CONTACT --> */}
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              {t("Nav_Contact")}
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              {t("Contact_SubTitle")}
            </h2>
            <p className="text-md font-medium text-secondary dark:text-slate-500 md:text-lg">
              <Trans components={{ i: <i /> }}>
                {t("Contact_Description")}
              </Trans>
            </p>
          </div>
        </div>
        <form action="" method="post">
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="mb-8 w-full px-4">
              <label
                className="text-bse font-bold text-primary"
                htmlFor="name_form"
              >
                {t("Name_Form")}
              </label>
              <input
                type="text"
                id="name_form"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-white"
                placeholder={t("Name_Form")}
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                className="text-bse font-bold text-primary"
                htmlFor="contact_form"
              >
                {t("Contact_Form")}
              </label>
              <input
                type="text"
                id="contact_form"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-white"
                placeholder={t("Contact_Form")}
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                className="text-bse font-bold text-primary"
                htmlFor="desc_form"
              >
                {t("Desc_Form")}
              </label>
              <textarea
                type="text"
                id="desc_form"
                className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-white"
                placeholder={t("Desc_Form")}
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button
                className="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
                type="submit"
              >
                {t("Send_Form")}
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <!-- /CONTACT --> */}
    </section>
  );
};

export default ContactBox;
