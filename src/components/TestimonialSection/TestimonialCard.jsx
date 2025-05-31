import "./TestimonialCard.css";
import ratingfilled from "../..//assets/ratingfilled.png";
import ratingempty from "../../assets/ratingempty.png";

export default function TestimonialCard({
  avatar,
  name,
  occupation,
  rating,
  text,
}) {
  const ratingArr = new Array(Number(rating)).fill(rating);
  const remainderArr = new Array(5 - Number(rating)).fill(rating);
  return (
    <div className="testimonialcard">
      <div className="testimonialcardleft">
        <img src={avatar} className="testimonialcardavatar" />
      </div>
      <div className="testimonialcardright">
        <div className="testimonialcardtop">
          <div className="testimonialcardname">{name}</div>
        </div>
        <div className="testimonialcardmiddle">
          <div className="testimonialcardoccupation">{occupation}</div>
          <div className="testimonialcardrating">
            {ratingArr.map((rating) => (
              <span>
                <img src={ratingfilled} />
              </span>
            ))}
            {rating < 5 &&
              remainderArr.map((r) => (
                <span>
                  <img src={ratingempty} />
                </span>
              ))}
          </div>
        </div>
        <div className="testomonialbottom">
          <div className="testimonialcardtext">{text}</div>
        </div>
      </div>
    </div>
  );
}
