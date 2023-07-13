import { HeaderSlider } from "./headerSlider/HeaderSlider";
import "./Header.css";
import { Logo } from "../componets/logo/Logo";

export const Header = () => {
  return (
    <div className="WrapperHeader">
      <HeaderSlider />
      <Logo />
    </div>
  );
};
