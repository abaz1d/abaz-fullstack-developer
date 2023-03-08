import React from "react";
import { Trans, useTranslation } from "react-i18next";
import ME from "@/assets/images/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="bg-slate-300 dark:bg-slate-900 sm:pt-24 sm:pb-24"
    >
      <h5 className="text-center text-[0.83em] font-medium text-secondary dark:text-white">
        {t("HeroBox_Title")}
      </h5>
      <h2 className="mb-12 text-center text-[1.5em] font-medium text-primary">
        About Me
      </h2>

      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image about__me grayscale hover:grayscale-0">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards text-center">
            <article className="about__card cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
              <FaAward className="about__icon mx-auto" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
              <FiUsers className="about__icon mx-auto" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
              <VscFolderLibrary className="about__icon mx-auto" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p className="indent-8">
            <Trans components={{ a: <a /> }}>
              {t("AboutBox_Description2")}
            </Trans>
          </p>
          <a
            href="#contact"
            className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
          >
            {t("HeroBox_Contactme")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
