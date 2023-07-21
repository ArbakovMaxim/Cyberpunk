import "../ui/uiStyled.css";
import "./Hp.css";
import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";
import display from "../../image/display.png";
import display_1024 from "../../image/display_1024.png";
import display_340 from "../../image/display_340.png";
import cyberPunk from "../../image/yellowCyberpunk.png";
import cyberPunk_340 from "../../image/Cyberpunk_2077_logo_340.png";
import { HpLogo } from "../../image/svg/HpLogo";
import { HpGroup } from "../../image/svg/HpGroup";
import { ColorLens } from "../../image/svg/ColorLens";
import { Stars } from "../../image/svg/Stars";
import { Copy } from "../../image/svg/Copy";

export const Hp = () => {
  const { isScreenXl, isScreenL } = useResize();
  const [srcDisplay, setSrcDisplay] = useState("");
  const [srcLogo, setSrcLogo] = useState("");

  function buttonClick() {
    console.log("Тут могла быть ваша реклама");
  }

  useEffect(() => {
    if (isScreenXl) {
      const imgDisplay = display;
      setSrcDisplay(imgDisplay);
    } else if (isScreenL) {
      const imgDisplay = display_1024;
      setSrcDisplay(imgDisplay);
    } else {
      const imgDisplay = display_340;
      setSrcDisplay(imgDisplay);
    }
  }, [isScreenXl, isScreenL]);

  useEffect(() => {
    const imgLogo = isScreenL ? cyberPunk : cyberPunk_340;
    setSrcLogo(imgLogo);
  }, [isScreenL]);

  return (
    <section className="section  sectionColorHp">
      <div className="container wrapperHPBlock">
        <div className="wrapperBlockHp">
          <img src={srcDisplay} alt="display" />
          <div className="wrapperLogo">
            <HpLogo />
            <HpGroup />
            <img src={srcLogo} alt="Logo" />
          </div>
        </div>
        <div className="wrapperHPText">
          <h2 className="titleHP">
            Полное погружение <br /> вместе с HP
          </h2>
          <p className="textHp">
            Погрузись в современные экшен-игры с реалистичным изображением с
            помощью монитора с диагональю 23,8 дюйма, созданном для{" "}
            {isScreenL ? <br /> : null}
            отображения максимально насыщенных цветов. Успевай реагировать
            {isScreenL ? <br /> : null} на любые события с временем отклика 1 мс
            и частотой в 144 Гц!
          </p>
          <div className="wrapperColorBlock">
            <ColorLens />
            <p className="textSvg">Яркие насыщенные цвета</p>
          </div>
          <div className="wrapperSvgBlock">
            <Stars />
            <p className="textSvg">Кристальная четкость изображения</p>
          </div>
          <div className="wrapperSvgBlock">
            <Copy />
            <p className="textSvg">Быстрые движения и плавный геймплей</p>
          </div>
          <button className="buttonHpblock" onClick={() => buttonClick()}>
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
};
