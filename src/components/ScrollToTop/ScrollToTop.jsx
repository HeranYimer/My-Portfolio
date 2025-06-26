import { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { BiArrowToTop } from "react-icons/bi"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button className="scroll-top" onClick={scrollToTop}>
      <BiArrowToTop size={24} />
    </button>
  ) : null;
};

export default ScrollToTop;
