import pointsBlack from "../../image/points.png";
import pointsYellow from "../../image/pointsYellow.png";
import "./IntermediatePicture.css";

interface Props {
  color: string;
}

export const IntermediatePicture = ({ color }: Props) => {
  const src = color === "black" ? pointsBlack : pointsYellow;
  return (
    <div className="wrapperIntermediatePicture">
      <img className="IntermediatePicture" src={src} alt="декор"></img>
    </div>
  );
};
