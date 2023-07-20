import "../ui/uiStyled.css";
import "./Hp.css";
import display from "../../image/display.png";
import cyberPunk from "../../image/yellowCyberpunk.png";
import { HpLogo } from "../../image/svg/HpLogo";
import { HpGroup } from "../../image/svg/HpGroup";
import { ColorLens } from "../../image/svg/ColorLens";
import { Stars } from "../../image/svg/Stars";
import { Copy } from "../../image/svg/Copy";

export const Hp = () => {
  function buttonClick() {
    console.log("Тут могла быть ваша реклама");
  }

  return (
    <section className="section  sectionColorHp">
      <div className="container wrapperHPBlock">
        <div className="wrapperBlockHp">
          <img src={display} alt="display" />
          <div className="wrapperLogo">
            <HpLogo />
            <HpGroup />
            <img src={cyberPunk} alt="Logo" />
          </div>
        </div>
        <div className="wrapperHPText">
          <h2 className="titleHP">
            Полное погружение <br /> вместе с HP
          </h2>
          <p className="textHp">
            Погрузись в современные экшен-игры с реалистичным изображением с
            помощью монитора с диагональю 23,8 дюйма, созданном для <br />
            отображения максимально насыщенных цветов. Успевай реагировать
            <br /> на любые события с временем отклика 1 мс и частотой в 144 Гц!
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
