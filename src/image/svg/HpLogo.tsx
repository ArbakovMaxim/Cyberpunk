import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";

export const HpLogo = () => {
  const { isScreenL } = useResize();
  const [size, setSize] = useState("80");

  useEffect(() => {
    const svgSize = isScreenL ? "80" : "44";
    setSize(svgSize);
  }, [isScreenL]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_14_68)">
        <path
          d="M40.0007 80C39.6031 80 39.2071 79.993 38.8118 79.9815L46.9866 57.5152H58.2366C60.2112 57.5152 62.3788 55.9972 63.0542 54.1426L71.9227 29.7822C73.3738 25.7939 71.0894 22.5309 66.8455 22.5309H51.2381L38.1433 58.5154H38.1383L30.7142 78.9141C13.1014 74.727 0.000671387 58.8941 0.000671387 40C0.000671387 21.6509 12.3562 6.18889 29.2012 1.47667L21.541 22.5309H21.5388L8.80437 57.5152L17.2816 57.5159L28.1112 27.7881H34.4825L23.6529 57.5159L32.127 57.5174L42.2192 29.7822C43.671 25.7939 41.3864 22.5309 37.1464 22.5309H30.0205L38.2025 0.042037C38.7988 0.0155556 39.3977 0 40.0003 0C62.0918 0 80.0003 17.9085 80.0003 40C80.0003 62.0913 62.0918 80 40.0003 80H40.0007ZM64.2029 27.7667H57.8334L48.9136 52.2404H55.2833L64.2029 27.7667Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_68">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
