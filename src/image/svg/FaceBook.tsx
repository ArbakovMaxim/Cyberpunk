import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";

export const FeceBook = () => {
  const { isScreenL } = useResize();
  const [size, setSize] = useState("30");

  useEffect(() => {
    const svgSize = isScreenL ? "30" : "25";
    setSize(svgSize);
  }, [isScreenL]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_224)">
        <path
          d="M5.47782 0C2.44335 0 0 2.44335 0 5.47782V24.5222C0 27.5567 2.44335 30 5.47782 30H15.7997V18.2719H12.6985V14.0494H15.7997V10.4419C15.7997 7.60764 17.6321 5.00532 21.8531 5.00532C23.5622 5.00532 24.826 5.16939 24.826 5.16939L24.7266 9.11253C24.7266 9.11253 23.4377 9.10035 22.0312 9.10035C20.5091 9.10035 20.265 9.80169 20.265 10.966V14.0494H24.8475L24.6478 18.2719H20.265V30.0001H24.5222C27.5567 30.0001 30 27.5567 30 24.5222V5.47785C30 2.44338 27.5567 3e-05 24.5222 3e-05H5.47779L5.47782 0Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_224">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
