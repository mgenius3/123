// components/ScrollToTop.js
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
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
    isVisible && (
      <div onClick={scrollToTop} style={buttonStyle}>
        <Image src="/svg/top.svg" width={30} height={30} />
      </div>
    )
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 10px",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  boxShadow: "0px 2px 4px goldenrod, -2px 0px 4px goldenrod", // Add box shadow here
  transition: "box-shadow 0.3s ease", // Smooth transition for hover effect
};

const buttonHoverStyle = {
  ...buttonStyle,
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
};

export default ScrollToTop;
