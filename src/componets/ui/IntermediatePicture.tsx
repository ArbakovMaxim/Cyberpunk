import pointsBlack from "../../image/points.png";
import pointsYellow from "../../image/pointsYellow.png";
import pointsBlack_320 from "../../image/pints_320.png";
import pointsYellow_320 from "../../image/pointsYellow_320.png";
import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";
import "./IntermediatePicture.css";

interface Props {
  color: string;
}

export const IntermediatePicture = ({ color }: Props) => {
  const { isScreenL } = useResize();
  const [points, setPoints] = useState("");

  useEffect(() => {
    if (color === "black") {
      const imgPointsBlack = isScreenL ? pointsBlack : pointsBlack_320;
      setPoints(imgPointsBlack);
    }
    if (color === "yellow") {
      const imgPointsYellow = isScreenL ? pointsYellow : pointsYellow_320;
      setPoints(imgPointsYellow);
    }
  }, [color, isScreenL]);

  return (
    <div className="wrapperIntermediatePicture">
      <img className="IntermediatePicture" src={points} alt="декор"></img>
    </div>
  );
};
