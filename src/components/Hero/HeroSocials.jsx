import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const HeroSocials = () => {
  return (
    <div
      className="hero__socials text-secondary dark:text-primary"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <a
        href="https://github.com/abaz1d"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/abaz-id/"
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin"
      >
        <BsLinkedin />
      </a>
      <a
        href="mailto:abaz.my.id@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="email"
      >
        <FiMail />
      </a>
    </div>
  );
};

export default HeroSocials;
