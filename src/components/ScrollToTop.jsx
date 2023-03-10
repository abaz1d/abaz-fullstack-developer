import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const darkToggle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div onClick={darkToggle}>
          <a
            href="#home"
            className="fixed right-4 bottom-5 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2 hover:animate-pulse"
            data-aos="fade-down"
            data-aos-duration="500"
            aria-label="totop"
          >
            <div data-aos="fade-up" data-aos-duration="500">
              <span className="mt-2 block h-5 w-5 rotate-45 border-t-[3px] border-l-[3px] dark:border-dark"></span>
            </div>
          </a>
        </div>
      )}
    </>
  );
}
