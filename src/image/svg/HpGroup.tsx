import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";

export const HpGroup = () => {
  const { isScreenL } = useResize();
  const [sizeW, setSizeW] = useState("92");
  const [sizeH, setSizeH] = useState("21");

  useEffect(() => {
    const svgSizeW = isScreenL ? "92" : "49";
    setSizeW(svgSizeW);
    const svgSizeH = isScreenL ? "21" : "10";
    setSizeH(svgSizeH);
  }, [isScreenL]);

  return (
    <svg
      width={sizeW}
      height={sizeH}
      viewBox="0 0 92 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M91 1.28149L1 19.9012" stroke="black" />
      <path d="M90.8938 20.1829L1.1065 0.999834" stroke="black" />
    </svg>
  );
};
