import disk from "../../image/buyBlock.jpg";
import { Directory } from "../../image/svg/Directory";
import { Disk } from "../../image/svg/Disk";
import { PC } from "../../image/svg/PC";
import { PS } from "../../image/svg/PS";
import { Stadia } from "../../image/svg/Stadia";
import { Wysiwyg } from "../../image/svg/Wysiwyg";
import { Xbox } from "../../image/svg/Xbox";
import "../ui/uiStyled.css";
import "./BuyBlock.css";

export const BuyBlock = () => {
  return (
    <div className="wrapperBuyBlock">
      <img src={disk} alt="" />
      <section className="section sectionColorBuyBlock">
        <h2 className="titleBuyBlock">
          Купить игру <br /> Cyberpunk 2077
        </h2>
        <p className="textBuyBlock">В комплект входит:</p>
        <div className="wrapperSvgBuyBlock">
          <Disk />
          <p className="textBuyBlockSvg ">Футляр с игровыми дисками</p>
        </div>
        <div className="wrapperSvgBuyBlock">
          <Wysiwyg />
          <p className="textBuyBlockSvg ">
            Футляр с кодом для загрузки игры и дисками (pc)
          </p>
        </div>
        <div className="wrapperSvgBuyBlock">
          <Directory />
          <p className="textBuyBlockSvg ">
            Справочник с информацией об игровом мире
          </p>
        </div>
        <h3 className="titlePlatform">Выберите платформу:</h3>
        <div className="svgBuyBlockPC">
          <PC />
          <span className="spanSvgBuyBlock">
            <Xbox />
          </span>
        </div>
        <div className="svgBuyBlockPS">
          <Stadia />
          <span className="spanSvgBuyBlock">
            <PS />
          </span>
        </div>
      </section>
    </div>
  );
};
