import React from "react";
import CV from "@/assets/cv.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[2.5rem] flex justify-center gap-[1.2rem]">
      <a
        data-aos="fade-up-left"
        data-aos-duration="900"
        href={CV}
        download
        className="rounded-md border-2 border-primary py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white hover:opacity-80 hover:shadow-lg"
      >
        {t("HeroBox_CV")}
      </a>
      <a
        data-aos="fade-up-right"
        data-aos-duration="900"
        href="#contact"
        className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
      >
        {t("HeroBox_Contactme")}
      </a>
    </div>
  );
};

export default CTA;
