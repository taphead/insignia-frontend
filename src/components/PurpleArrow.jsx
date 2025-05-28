import rightarrowpurple from "../assets/rightarrowpurple.png";
import rigtarrowbarpurple from "../assets/rightarrowbarpurple.png";
import "./PurpleArrow.css";
export default function PurpleArrow() {
  return (
    <>
      <span className="purplearrowcontainer">
        <img src={rigtarrowbarpurple} />
        <img src={rightarrowpurple} style={{ height: "14px" }} />
      </span>
    </>
  );
}
