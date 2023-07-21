import disk from "../../image/buyBlock.jpg";
import disk_1024 from "../../image/buyBlock_1024.jpg";
import disk_320 from "../../image/buyBlock_320.jpg";
import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";
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
  const { isScreenXl, isScreenL } = useResize();
  const [srcDisk, setSrcDisk] = useState("");

  useEffect(() => {
    if (isScreenXl) {
      const imgdisk = disk;
      setSrcDisk(imgdisk);
    } else if (isScreenL) {
      const imgdisk = disk_1024;
      setSrcDisk(imgdisk);
    } else {
      const imgdisk = disk_320;
      setSrcDisk(imgdisk);
    }
  }, [isScreenXl, isScreenL]);

  return (
    <div className="wrapperBuyBlock">
      <img src={srcDisk} alt="" />
      <section className="section sectionColorBuyBlock">
        <h2 className="titleBuyBlock">
          Купить игру <br />
          Cyberpunk 2077
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
