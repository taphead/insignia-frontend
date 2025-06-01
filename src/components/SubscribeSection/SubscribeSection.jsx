import "./SubscribeSection.css";

export default function SubscribeSection() {
  return (
    <div className="subscribesection">
      <div className="subscribesectionleft">
        <div className="subscribesectionboldtext">Subscribe!</div>
        <div className="subscribesectionmaintext">
          Join our newsletter to never miss any latest news.
        </div>
      </div>
      <div className="subscribesectionright">
        <div className="subscribeinputcontainer">
          <div className="subscribeinput">Enter your e-mail address here</div>
          <button className="subscribebutton">Join Us</button>
        </div>
      </div>
      <div className="subscribemobilebutton">
        <button className="mobilebutton">Join us</button>
      </div>
    </div>
  );
}
