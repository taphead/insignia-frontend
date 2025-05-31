import "./LeftArrow.css";
import leftarrow from "../assets/LeftArrow.png";
import whitearrowbar from "../assets/whitearrowbar.png";
export default function LeftArrow({ style }) {
  return (
    <div className={"leftarrow" + style}>
      <img src={leftarrow} />
      <img src={whitearrowbar} />
    </div>
  );
}
