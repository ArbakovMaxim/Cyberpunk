import { useState, useEffect } from "react";

export const useResize = () => {
  const SCREEN_L = 1024;
  const SCREEN_XL = 1920;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenL: width >= SCREEN_L,
    isScreenXl: width >= SCREEN_XL,
  };
};
