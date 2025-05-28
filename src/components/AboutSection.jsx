import "./AboutSection.css";
import security from "../assets/security.png";
export default function AboutSection() {
  return (
    <div className="aboutsection">
      <div className="aboutsectionleft">
        <img src={security} className="aboutsectionimage" />
      </div>
      <div className="aboutsectionright">
        <div className="aboutsectionboldtext">
          We are a high-level data storage bank
        </div>
        <div className="aboutsectionmaintext">
          The place to store various data that you can access at any time
          through the internet and where you can carry it. This very flexible
          storage area has a high level of security. To enter into your own data
          you must enter the password that you created when you registered in
          this Data Warehouse.
        </div>
      </div>
    </div>
  );
}
