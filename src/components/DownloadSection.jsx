import "./DownloadSection.css";
import phone from "../assets/Phone.png";
export default function DownloadSection() {
  return (
    <div className="downloadsection">
      <div className="downloadsectionleft">
        <div className="downloadsectionboldtext">Download Our App</div>
        <div className="downloadsectionmaintext">
          The place to store various data that you can access at any time
          through the internet and where you can carry it. This very flexible
          storage area has a high level of security. To enter into your own data
          you must enter the password that you created when you registered in
          this Data Warehouse.
        </div>
        <button className="downloadsectionbutton">Download</button>
      </div>
      <div className="downloadsectionright">
        <img src={phone} />
      </div>
    </div>
  );
}
