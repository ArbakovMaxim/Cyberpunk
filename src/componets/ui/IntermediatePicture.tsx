import pointsBlack from "../../image/points.png";
import pointsYellow from "../../image/pointsYellow.png";

interface Props {
  color: string;
}

export const IntermediatePicture = ({ color }: Props) => {
  const src = color === "black" ? pointsBlack : pointsYellow;
  return (
    <div>
      <img src={src} alt="декор"></img>
    </div>
  );
};
