import { Promotion } from "../../image/svg/Promotion";
import win from "../../image/win.png";
import "../ui/uiStyled.css";
import "./PlayAndWin.css";

export const PlayAndWin = () => {
  return (
    <section className="section  sectionColor">
      <div className="container">
        <div className="wrapperPlay">
          <Promotion />
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
          <form></form>
          <img src={win} alt="призы"></img>
        </div>
      </div>
    </section>
  );
};
