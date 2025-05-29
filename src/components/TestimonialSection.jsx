import TestimonialCard from "./TestimonialCard";
import "./TestimonialSection.css";

export default function TestimonialSection() {
  return (
    <div className="testimonialsection">
      <div className="testimonialboldtext">Testimonial</div>
      <div className="testimonialcardcontainer">
        <TestimonialCard
          text="Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
        />
        <TestimonialCard
          text="Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
        />
      </div>
    </div>
  );
}
