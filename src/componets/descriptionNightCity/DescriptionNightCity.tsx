import "../ui/uiStyled.css";
import "./DescriptionNightCity.css";
import Description1 from "../../image/Description1.png";
import Description1_320 from "../../image/Description1_320.png";
import Description2 from "../../image/Description2.png";
import Description2_320 from "../../image/Description2_320.png";
import Description3 from "../../image/Description3.png";
import Description3_1024 from "../../image/Description3_1024.png";
import Description3_320 from "../../image/Description3_320.png";
import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";

export const DescriptionNightCity = () => {
  const { isScreenXl, isScreenL } = useResize();
  const [srcDescription1, setDescription1] = useState("");
  const [srcDescription2, setDescription2] = useState("");
  const [srcDescription3, setDescription3] = useState("");

  useEffect(() => {
    const imgDescription1 = isScreenL ? Description1 : Description1_320;
    setDescription1(imgDescription1);
  }, [isScreenL]);

  useEffect(() => {
    const imgDescription2 = isScreenL ? Description2 : Description2_320;
    setDescription2(imgDescription2);
  }, [isScreenL]);

  useEffect(() => {
    if (isScreenXl) {
      const imgDescription3 = Description3;
      setDescription3(imgDescription3);
    } else if (isScreenL) {
      const imgDescription3 = Description3_1024;
      setDescription3(imgDescription3);
    } else {
      const imgDescription3 = Description3_320;
      setDescription3(imgDescription3);
    }
  }, [isScreenXl, isScreenL]);

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
          <div className="wrapperImgDescription">
            <img src={srcDescription1} alt="Ночной город фото 1" />
            <img
              className="img"
              src={srcDescription2}
              alt="Ночной город фото 2"
            />
          </div>
          <img
            className="img3"
            src={srcDescription3}
            alt="Ночной город фото 3"
          />
        </div>
      </div>
    </section>
  );
};
