import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";

export const Directory = () => {
  const { isScreenL } = useResize();
  const [size, setSize] = useState("32");

  useEffect(() => {
    const svgSize = isScreenL ? "32" : "24";
    setSize(svgSize);
  }, [isScreenL]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clipPath="url(#clip0_15_45)">
        <path
          d="M29.3333 21.3334V5.33341C29.3333 3.86675 28.1333 2.66675 26.6666 2.66675H10.6666C9.19996 2.66675 7.99996 3.86675 7.99996 5.33341V21.3334C7.99996 22.8001 9.19996 24.0001 10.6666 24.0001H26.6666C28.1333 24.0001 29.3333 22.8001 29.3333 21.3334ZM14.6666 16.0001L17.3733 19.6134L21.3333 14.6667L26.6666 21.3334H10.6666L14.6666 16.0001ZM2.66663 8.00008V26.6667C2.66663 28.1334 3.86663 29.3334 5.33329 29.3334H24V26.6667H5.33329V8.00008H2.66663Z"
          fill="#F8F200"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_45">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};