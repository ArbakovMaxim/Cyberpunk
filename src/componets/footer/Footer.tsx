import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";
import "../ui/uiStyled.css";
import "./Footer.css";
import logo from "../../image/Logo.png";
import logoImg_320 from "../../image/Logo_320.png";
import CdProject from "../../image/CD_Projekt.png";
import CdProject_320 from "../../image/CD_Projekt_320.png";

export const Footer = () => {
  const { isScreenL } = useResize();
  const [srcLogo, setSrcLogo] = useState("");
  const [srcCD, setSrcCD] = useState("");

  useEffect(() => {
    const imgDisk = isScreenL ? logo : logoImg_320;
    setSrcLogo(imgDisk);
  }, [isScreenL]);

  useEffect(() => {
    const imgCD = isScreenL ? CdProject : CdProject_320;
    setSrcCD(imgCD);
  }, [isScreenL]);

  return (
    <footer className="footer">
      <div className="wrapperFooter">
        <div className="wraperImgFooter">
          <img className="footerImg" src={srcLogo} alt="logo" />
          <img className="footerImgCD" src={srcCD} alt="logo" />
        </div>
        <div className="wrapperLicenseandPrivacyText">
          <p className="textLicense">Лицензия</p>
          <p className="textLicense textPrivacy">Политика конфиденциальности</p>
        </div>
      </div>
      <div className="wrapperTextFooter">
        <p className="footerText">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
      </div>
    </footer>
  );
};
