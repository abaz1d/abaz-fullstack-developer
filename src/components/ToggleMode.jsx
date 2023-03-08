import React, { useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";

export default function ToggleMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const storedPreference = localStorage.getItem("prefersDarkMode");
    if (storedPreference) {
      setDarkMode(JSON.parse(storedPreference));
    }
    setFlag(true);
  }, []);
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
      >
        <ImSun
          className="sun-toggle block h-6 w-14 dark:hidden"
          data-aos="fade-up"
          data-aos-duration="500"
        />
        <FaRegMoon
          className="moon-toggle hidden h-6 w-14 dark:block"
          data-aos="fade-down"
          data-aos-duration="500"
        />
      </div>
    </>
  );
}
