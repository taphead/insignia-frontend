import insigniacircle from "../assets/abstract-circle.png";
import "./Navbar.css";
import PurpleArrow from "./PurpleArrow";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={insigniacircle} className="insignia-circle" />
        <span
          style={{
            width: "108px",
            height: "33px",
            color: "#30FBEF",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Insignia
        </span>
      </div>
      <div className="navbar-right">
        <span>About</span>
        <span>Help</span>
        <span>Features</span>
        <span>Signup</span>
        <button className="requestbutton">
          Request demo
          <PurpleArrow />
        </button>
      </div>
    </div>
  );
}
