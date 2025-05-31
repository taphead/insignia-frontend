import "./Bottom.css";
import FooterLogoContainer from "./FooterLogoContainer";
import union from "../assets/Union.png";
export default function Bottom() {
  return (
    <div className="bottom">
      <span className="bottomleft">
        © Insignia™, 2020. All rights reserved.
      </span>
      <span className="bottomright">
        <FooterLogoContainer>
          <img
            src={union}
            style={{ width: "30px", height: "27px", padding: "5px" }}
            className="bottomimage"
          />
        </FooterLogoContainer>
      </span>
    </div>
  );
}
