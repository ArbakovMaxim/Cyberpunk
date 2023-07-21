import "./Logo.css";
import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";
import logoImg from "../../image/Logo.png";
import logoImg_320 from "../../image/Logo_320.png";

export const Logo = () => {
  const { isScreenL } = useResize();
  const [srcLogo, setSrcLogo] = useState("");

  useEffect(() => {
    const imgDisk = isScreenL ? logoImg : logoImg_320;
    setSrcLogo(imgDisk);
  }, [isScreenL]);

  return (
    <div className="WrapperLogo">
      <img src={srcLogo} alt="Logo" className="Logo" />
    </div>
  );
};
