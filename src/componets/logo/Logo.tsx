import "./Logo.css";
import LogoImg from "../../image/Logo.png";

export const Logo = () => {
  return (
    <div className="WrapperLogo">
      <img src={LogoImg} alt="Logo" className="Logo" />
    </div>
  );
};
