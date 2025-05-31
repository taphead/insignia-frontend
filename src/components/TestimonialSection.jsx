import TestimonialCard from "./TestimonialCard";
import "./TestimonialSection.css";
import avatar1 from "../assets/john.png";
import avatar2 from "../assets/jenny.png";
import purplecircle from "../assets/purplecircle.png";
import whitecircle from "../assets/whitecircle.png";
import LeftArrow from "./LeftArrow";

export default function TestimonialSection() {
  return (
    <div className="testimonialsection">
      <div className="testimonialboldtext">Testimonial</div>
      <div className="testimonialcardcontainer">
        <TestimonialCard
          avatar={avatar1}
          name="John Fang"
          occupation="Web Designer"
          rating="4"
          text="Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
        />
        <TestimonialCard
          avatar={avatar2}
          name="Jenny Doe"
          occupation="Ux Designer"
          rating="5"
          text="Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
        />
      </div>
      <div className="testimonialfooter">
        <div className="testimonialcircles">
          <img src={purplecircle} className="testimonialcirclepurple" />
          <img src={whitecircle} className="testimonialcirclewhite" />
          <img src={whitecircle} className="testimonialcirclewhite" />
          <img src={whitecircle} className="testimonialcirclewhite" />
        </div>
        <div className="testimonialarrows">
          <LeftArrow style="normal" />
          <LeftArrow style="inverted" />
        </div>
      </div>
    </div>
  );
}
