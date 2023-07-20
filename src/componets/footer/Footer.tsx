import "../ui/uiStyled.css";
import "./Footer.css";
import logo from "../../image/Logo.png";
import { CdProject } from "../../image/svg/CdProjekt";

export const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div>
          <img className="footerImg" src={logo} alt="logo" />
          <CdProject />
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
