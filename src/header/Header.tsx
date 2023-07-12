import { HeaderSlider } from "./headerSlider/HeaderSlider";
import "./Header.css";

export const Header = () => {
  const Logo = "../image/Logo.png";
  return (
    <div className="WrapperHeader">
      <HeaderSlider />
      <div className="WrapperLogo">
        <img src={Logo} alt="Logo" className="Logo" />
      </div>
    </div>
  );
};
