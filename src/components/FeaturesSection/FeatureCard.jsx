import "./FeatureCard.css";
import PurpleArrow from "../PurpleArrow/PurpleArrow";

export default function FeatureCard({ img, boldText, mainText }) {
  return (
    <div className="featurecard">
      <div className="featurecardimagecontainer">
        <img src={img} className="featurecardimage"></img>
      </div>

      <div className="featurecardboldtext">{boldText}</div>
      <div className="featurecardmaintext">{mainText}</div>
      <div className="featurecardfooter">
        Learn More <PurpleArrow />
      </div>
    </div>
  );
}
