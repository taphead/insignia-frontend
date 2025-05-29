import FeatureCard from "./FeatureCard";
import "./FeaturesSection.css";
import clipboard from "../assets/ClipboardText.png";
import printer from "../assets/Printer.png";
import shieldcheck from "../assets/ShieldCheck.png";
export default function FeaturesSection() {
  return (
    <div className="featuressection">
      <div className="featuressectionboldtext">Features</div>
      <div className="featuressectioncard">
        <div className="featurecardcontainer">
          <FeatureCard
            img={clipboard}
            boldText="Search Data"
            mainText="Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time."
          />
          <FeatureCard
            img={printer}
            boldText="Print Out"
            mainText="Print out service gives you convenience if someday you need print data, just edit it all and just print it."
          />
          <FeatureCard
            img={shieldcheck}
            boldText="Security Code"
            mainText="Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file."
          />
        </div>
      </div>
      <div className="featuressectionfooter">
        <div>Circles</div>
        <div>Arrows</div>
      </div>
    </div>
  );
}
