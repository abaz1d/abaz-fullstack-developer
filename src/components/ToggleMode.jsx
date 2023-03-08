import React, { useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";

export default function ToggleMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [flag, setFlag] = useState(false);

  //Call from local Storage
  useEffect(() => {
    const storedPreference = localStorage.getItem("prefersDarkMode");
    if (storedPreference) {
      setDarkMode(JSON.parse(storedPreference));
    }
    setFlag(true);
  }, []);

  //Set to Local Storage
  useEffect(() => {
    if (flag) {
      localStorage.setItem("prefersDarkMode", darkMode);
      document.body.classList.toggle("dark", darkMode);
    }
  }, [darkMode, flag]);

  return (
    <>
      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="fixed right-[80px] bottom-4 z-[9999] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 text-slate-600 transition duration-300 hover:animate-pulse dark:text-slate-200"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <ImSun className="sun-toggle block h-6 w-14 dark:hidden" />
        <FaRegMoon className="moon-toggle hidden h-6 w-14 dark:block" />
      </div>
    </>
  );
}
