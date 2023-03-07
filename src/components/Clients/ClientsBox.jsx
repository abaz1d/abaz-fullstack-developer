import React from "react";
import { Trans, useTranslation } from "react-i18next";
import lurikrachmad from "@/assets/images/lurikrachmad.svg";
import birookk from "@/assets/images/birookk.svg";
import binaniaga from "@/assets/images/binaniaga.png";
import anlimitid from "@/assets/images/anlimitid.png";

const ClientsBox = () => {
  const { t } = useTranslation();
  return (
    <section
      className="bg-slate-900 pt-36 pb-32 dark:bg-slate-300"
      id="clients"
    >
      {/* <!-- CLIENTS --> */}
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              {t("Nav_Clients")}
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">
              {t("Clients_SubTitle")}
            </h2>
            <p className="text-md font-medium text-slate-400 dark:text-slate-600 md:text-lg">
              <Trans components={{ i: <i /> }}>
                {t("Clients_Description")}
              </Trans>
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="https://lurikrachmad.co.id/"
              target={"_blank"}
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={lurikrachmad} alt="lurikrachmad" />
            </a>
            <a
              href="http://153.92.210.7:3003/"
              target={"_blank"}
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={anlimitid} alt="anlimitid" />
            </a>
            <a
              href="https://www.senkom.or.id/"
              target={"_blank"}
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={birookk} alt="birookk" />
            </a>
            <a
              href="https://sikopi.patikab.go.id/index.php?rute=user&id=1124"
              target={"_blank"}
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={binaniaga} alt="binaniaga" />
            </a>
          </div>
        </div>
      </div>
      {/* <!-- /CLIENTS --> */}
    </section>
  );
};

export default ClientsBox;
