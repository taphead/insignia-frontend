import "./TestimonialCard.css";
import avatar from "../assets/john.png";
export default function TestimonialCard({ name, occupation, rating, text }) {
  return (
    <div className="testimonialcard">
      <div className="testimonialcardleft">
        <img src={avatar} className="testimonialcardavatar" />
      </div>
      <div className="testimonialcardright">
        <div className="testimonialcardtop">
          <div className="testimonialcardname">Name</div>
        </div>
        <div className="testimonialcardmiddle">
          <div className="testimonialcardoccupation">Occupation</div>
          <div className="testimonialcardrating">Rating</div>
        </div>
        <div className="testomonialbottom">
          <div className="testimonialcardtext">{text}</div>
        </div>
      </div>
    </div>
  );
}
