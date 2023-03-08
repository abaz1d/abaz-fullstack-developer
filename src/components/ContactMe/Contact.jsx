import React, { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhmyh7q",
        "template_wbpqpbr",
        form.current,
        "Po8nwYiPRh31wRCkt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="dark:bg-dark sm:pt-24 sm:pb-24">
      <h5 className="text-center text-[0.83em] font-medium text-secondary dark:text-white">
        {t("Contact_Description")}
      </h5>
      <h2 className="mb-12 text-center text-[1.5em] font-medium text-primary">
        {t("Nav_Contact")}
      </h2>
      <div className="contact__container container">
        <div className="contact__options">
          <article className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
            <MdOutlineEmail className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">Email</h4>
            <h5 className="dark:text-white">manu@gmail.com</h5>
            <a href="mailto:manu@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
            <RiMessengerLine className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">Messenger</h4>
            <h5 className="dark:text-white">Manohar</h5>
            <a href="https://m.me/manohar" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]">
            <BsWhatsapp className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">Whatsapp</h4>
            <h5 className="dark:text-white">+987654321</h5>
            <a
              href="https://api.whatsapp.com/send?phone=987654321"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("Name_Form")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("Contact_Form")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("Desc_Form")}
            required
          ></textarea>
          <button
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

export default Contact;
