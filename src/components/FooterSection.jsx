import "./FooterSection.css";
import insigniacircle from "../assets/abstract-circle.png";
import FooterLogoContainer from "./FooterLogoContainer";
import facebooklogo from "../assets/FacebookLogo.png";
import instagramlogo from "../assets/InstagramLogo.png";
import twitterlogo from "../assets/TwitterLogo.png";
export default function () {
  return (
    <div className="footercontainer">
      <div className="footercol1">
        <div className="footercol1-1">
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

        <div className="footercol1-2">
          Insignia Society, 234 <br /> Bahagia Ave Street PRBW 29281
        </div>

        <div className="footercol1-3">
          info@insignia.com <br /> 1-232-3434 (Main)
        </div>
      </div>

      <div className="footercol2">
        <div className="footercol2-1">About</div>
        <div className="footercol2-2">
          <div>Profile</div>
          <div>Features</div>
          <div>Careers</div>
          <div>DW News</div>
          <br />
        </div>
      </div>

      <div className="footercol3">
        <div className="footercol3-1">Help</div>
        <div className="footercol3-2">
          <div>Support</div>
          <div>Sign up</div>
          <div>Guide</div>
          <div>Reports</div>
          <div>QA</div>
        </div>
      </div>

      <div className="footercol4">
        <div className="footercol4-1">Social Media</div>
        <div className="footercol4-2">
          <FooterLogoContainer>
            <img src={facebooklogo} />
          </FooterLogoContainer>
          <FooterLogoContainer>
            <img src={instagramlogo} />
          </FooterLogoContainer>
          <FooterLogoContainer>
            <img src={twitterlogo} />
          </FooterLogoContainer>
        </div>
      </div>
    </div>
  );
}
