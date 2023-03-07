import React, { useEffect, useState } from "react";

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
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="color-scheme-light"
          className="sun-toggle block h-6 w-14 dark:hidden"
        >
          <path d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.64 6.64a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42A.999.999 0 0 1 5.64 6.64zm14.139 14.139a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42a.999.999 0 0 1-.707 1.707zM3 13H1a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm20 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zM4.22 20.779a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.993.993 0 0 1-.707.293zM18.359 6.64a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.997.997 0 0 1-.707.293z"></path>
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="color-scheme-dark"
          className="moon-toggle hidden h-6 w-14 dark:block"
        >
          <path d="M12.048 21.963c-.308 0-.618-.015-.93-.043-2.66-.246-5.064-1.513-6.771-3.567s-2.512-4.651-2.266-7.311a10.004 10.004 0 0 1 9.038-9.038 1 1 0 0 1 .896 1.589 6.008 6.008 0 0 0 1.258 8.392c2.078 1.536 5.055 1.536 7.133 0a1 1 0 0 1 1.591.896 9.951 9.951 0 0 1-9.949 9.082zM9.315 4.438a8.006 8.006 0 0 0-5.244 6.787 7.954 7.954 0 0 0 1.813 5.849 7.95 7.95 0 0 0 5.417 2.854 7.95 7.95 0 0 0 8.266-5.243 8.01 8.01 0 0 1-2.729.476 7.946 7.946 0 0 1-4.755-1.565C9.174 11.443 8.145 7.68 9.315 4.438z"></path>
        </svg>
      </div>
    </>
  );
}
