import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

import emailjs from "@emailjs/browser";

const ContactBox = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n960l0b",
        "template_hk77bp7",
        form.current,
        "TTD9hRoGoVh7DqSVk"
      )
      .then(
        () => {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2500);
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="dark:bg-dark lg:pt-24 lg:pb-24">
      <h2
        className="text-center text-[1em] font-medium  text-secondary dark:text-white lg:text-lg"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {t("Contact_Description")}
      </h2>
      <h3
        className="mb-12 text-center text-[2em] font-medium text-primary"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("Nav_Contact")}
      </h3>
      <div
        className={
          "fixed left-0 right-0 top-20 z-10 mx-auto flex max-w-fit animate-pulse items-center rounded border-2 border-primary  bg-blue-50 p-4 text-sm text-dark shadow-lg shadow-slate-500 dark:bg-dark dark:text-white lg:top-24" +
          (showAlert ? " translate-y-0" : " translate-y-[100vh]")
        }
      >
        <div>
          <FaInfoCircle />
        </div>
        <div className="w-full">
          <p className="mx-2 text-[15px]">{t("sent")}</p>
        </div>
      </div>
      <div className="contact__container container">
        <div className="contact__options mb-5 lg:mb-0">
          <article
            className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
            data-aos="fade-right-down"
            data-aos-duration="900"
          >
            <MdOutlineEmail className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">Email</h4>
            <h5 className="dark:text-white">abaz.my.id@gmail.com</h5>
            <a
              href="mailto:abaz.my.id@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="cp"
            >
              {t("send_message")}
            </a>
          </article>

          <article
            className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <BsLinkedin className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">LinkedIn</h4>
            <h5 className="dark:text-white">Abdul Aziz</h5>
            <a
              href="https://www.linkedin.com/in/abaz-id/"
              target="_blank"
              rel="noreferrer"
              aria-label="cp"
            >
              {t("send_message")}
            </a>
          </article>

          <article
            className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
            data-aos="fade-left-down"
            data-aos-duration="900"
          >
            <BsTelegram className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">Telegram</h4>
            <h5 className="dark:text-white">abaz_ID</h5>
            <a href="https://t.me/abaz_ID" target="_blank" rel="noreferrer">
              {t("send_message")}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            data-aos="fade-up"
            data-aos-duration="400"
            type="text"
            name="user_name"
            placeholder={t("Name_Form")}
            required
          />
          <input
            data-aos="fade-up"
            data-aos-duration="800"
            type="email"
            name="user_email"
            placeholder={t("Contact_Form")}
            required
          />
          <textarea
            data-aos="fade-up"
            data-aos-duration="1200"
            name="message"
            rows="7"
            placeholder={t("Desc_Form")}
            required
          ></textarea>
          <button
            data-aos="fade-down"
            data-aos-duration="1200"
            type="submit"
            className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
          >
            {t("Send_Form")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactBox;
