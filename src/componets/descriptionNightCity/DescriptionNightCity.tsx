import "../ui/uiStyled.css";
import "./DescriptionNightCity.css";
import Description1 from "../../image/Description1.png";
import Description2 from "../../image/Description2.png";
import Description3 from "../../image/Description3.png";

export const DescriptionNightCity = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Найт-Сити изменит тебя навсегда!</h2>
        <p className="textDescription">
          <span className="textTypography">Cyberpunk 2077 —</span>
          приключенческая ролевая игра, действие которой происходит в мегаполисе
          Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего.
          Ты играешь за V, наёмника в поисках устройства, позволяющего обрести
          бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры
          своего персонажа, исследуя открытый мир, где твои поступки влияют на
          ход сюжета и всё, что тебя окружает.
        </p>
        <div className="WrapperFoto">
          <div>
            <img src={Description1} alt="Ночной город фото 1" />
            <img className="img" src={Description2} alt="Ночной город фото 1" />
          </div>
          <img src={Description3} alt="Ночной город фото 1" />
        </div>
      </div>
    </section>
  );
};
