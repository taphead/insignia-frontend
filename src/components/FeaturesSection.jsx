import FeatureCard from "./FeatureCard";
import "./FeaturesSection.css";
import clipboard from "../assets/ClipboardText.png";
import printer from "../assets/Printer.png";
import shieldcheck from "../assets/ShieldCheck.png";
import purplecircle from "../assets/purplecircle.png";
import whitecircle from "../assets/whitecircle.png";
import LeftArrow from "./LeftArrow";
export default function FeaturesSection() {
  return (
    <div className="featuressection">
      <div className="featuressectionboldtext">Features</div>
      <div className="featuressectioncard">
        <div className="featurecardcontainer">
          <FeatureCard
            className="featurecard"
            img={clipboard}
            boldText="Search Data"
            mainText="Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time."
          />
          <FeatureCard
            className="featurecard"
            img={printer}
            boldText="Print Out"
            mainText="Print out service gives you convenience if someday you need print data, just edit it all and just print it."
          />
          <FeatureCard
            className="featurecard"
            img={shieldcheck}
            boldText="Security Code"
            mainText="Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file."
          />
        </div>
      </div>
      <div className="featuressectionfooter">
        <div className="featuressectioncircles">
          <img src={purplecircle} className="featurespurplecircle" />
          <img src={whitecircle} className="featureswhitecircle" />
        </div>
        <div className="featuressectionarrrows">
          <LeftArrow style="normal" />
          <LeftArrow style="inverted" />
        </div>
      </div>
    </div>
  );
}
