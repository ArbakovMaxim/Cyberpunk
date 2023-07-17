import { HeaderSlider } from "./headerSlider/HeaderSlider";
import "./Header.css";
import { Logo } from "../componets/logo/Logo";
import { SocialBlock } from "../componets/socialBlock/SocialBlock";
import { Banner } from "../componets/banner/Banner";

export const Header = () => {
  return (
    <div className="WrapperHeader">
      <HeaderSlider />
      <div className="WrapperSocialBlock">
        <Logo />
        <div>
          <SocialBlock />
        </div>
      </div>
      <Banner />
    </div>
  );
};
