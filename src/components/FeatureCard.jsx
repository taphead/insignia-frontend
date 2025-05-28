import "./FeatureCard.css";

export default function FeatureCard({ img, boldText, mainText }) {
  return (
    <div className="featurecard">
      <img src={img} className="featurecardimage"></img>
      <div className="featurecardboldtext">{boldText}</div>
      <div className="featurecardmaintext">{mainText}</div>
      <div className="featurecardfooter">Learn More</div>
    </div>
  );
}
