import { Promotion } from "../../image/svg/Promotion";
import win from "../../image/win.png";
import win_1024 from "../../image/win_1024.png";
import win_340 from "../../image/win_320.png";
import { ContactForm } from "../contactForm/ContactForm";
import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";
import "../ui/uiStyled.css";
import "./PlayAndWin.css";

export const PlayAndWin = () => {
  const { isScreenXl } = useResize();
  const [srcWin, setSrcWin] = useState("");

  useEffect(() => {
    const imgDescription3 = isScreenXl ? win : win_1024;
    setSrcWin(imgDescription3);
  }, [isScreenXl]);

  return (
    <section className="section  sectionColor">
      <div className="container">
        <div className="wrapperPlay">
          <Promotion />
          <img className="imgWin_340" src={win_340} alt="призы"></img>
          <h2 className="titlePlay">Играй и выигрывай!</h2>
        </div>
        <p className="textDescriptionPlay">
          Играй в <span className="textTypographyPlay">Cyberpunk 2077</span>и
          получи возможность выиграть консоль{" "}
          <span className="textTypographyPlay">Xbox Series X</span> или{" "}
          <span className="textTypographyPlay">Sony PlayStation 5!</span>{" "}
          Заполни <br /> форму ниже и приложи скриншот о покупке игры. Итоги
          розыгрыша будут подведены 1 февраля. Удачи! ;)
        </p>
        <div className="wrapperFormAndWin">
          <ContactForm />
          <img className="imgWin" src={srcWin} alt="призы"></img>
        </div>
      </div>
    </section>
  );
};
