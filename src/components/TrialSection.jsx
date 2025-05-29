import "./TrialSection.css";
import PurpleArrow from "./PurpleArrow";

export default function TrialSection() {
  return (
    <div className="trialsection">
      <div className="trialsectionleft">
        <div className="trialsectionboldtext">Try for free!</div>
        <div className="trialsectionmaintext">
          Get limited 1 week free try our features!
        </div>
      </div>
      <div className="trialsectionright">
        <button className="trialsectionlearnbutton">Learn More</button>
        <button className="trialsectionrequestbutton">
          <div className="trialbuttontext">
            Request Demo <PurpleArrow />
          </div>
        </button>
      </div>
    </div>
  );
}
