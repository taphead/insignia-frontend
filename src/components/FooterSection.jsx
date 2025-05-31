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
          Profile
          <br /> Features
          <br /> Careers
          <br /> DW
          <br /> News
        </div>
      </div>

      <div className="footercol3">
        <div className="footercol3-1">Help</div>
        <div className="footercol3-2">
          Support
          <br />
          Sign up
          <br />
          Guide
          <br />
          Reports
          <br />
          Q&A
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
      {/* <div className="footertoprow">
        <div className="footertoprow1">
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
        <div className="footertoprow2">
          <span>About</span>
        </div>
        <div className="footertoprow3">
          <span>Help</span>
        </div>
        <div className="footertoprow4">
          <span>Social Media</span>
        </div>
      </div>

      <div className="footermiddlerow">
        <div className="footermiddlerow1">
          <div>Insignia Society, 234</div>
          <div>Bahagia Ave Street PRBW 29281</div>
        </div>
        <div className="footermiddlerow2">
          <div>Profile</div>
          <div>Features</div>
        </div>
        <div className="footermiddlerow3">
          <div>Support</div>
          <div>Sign Up</div>
        </div>
        <div className="footermiddlerow4">
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
      </div> */}
    </div>
  );
}
