import { RocketIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function BtnScrollToUp() {
  const [btnVisible, setBtnVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  };

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`transition ease-in-out scale-125 -rotate-45 fixed bottom-10 right-10 p-2 rounded-full border-2 text-emerald-800 bg_btn border_base hover:scale-150 hover:border-amber-700 hover:text-emerald-500 ${
        btnVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      onClick={scrollToUp}
    >
      <span>
        <RocketIcon />
      </span>
    </button>
  );
}
