import "./HeroSection.css";
import cloudstoragepng from "../../assets/Cloud_database.png";
export default function HeroSection() {
  return (
    <div className="herosection">
      <div className="herosectionleft">
        <div className="herosectionboldtext">Save your data storage here.</div>
        <div className="herosectionmaintext">
          Insignia is a data storage area that has been tested for security, so
          you can store your data here safely but not be afraid of being stolen
          by others.
        </div>
        <button className="herosectionbutton">Learn More</button>
      </div>
      <div className="herosectionright">
        <img src={cloudstoragepng} className="herosectionimage" />
      </div>
    </div>
  );
}
