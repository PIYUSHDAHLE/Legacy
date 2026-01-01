import React, { useRef } from "react";
import "../Testimonial/Testimonial.css";
const Testimonial = () => {
  const sliderRef = useRef(null);
  const translateX = useRef(0);
  const slideForward = () => {
    if (translateX.current > -50) {
      translateX.current -= 25;
      sliderRef.current.style.transform = `translateX(${translateX.current}%)`;
    }
  };
  const slideBackward = () => {
    if (translateX.current < 0) {
      translateX.current += 25;
      sliderRef.current.style.transform = `translateX(${translateX.current}%)`;
    }
  };

  return (
    <div className="testi">
      <h2>Testimonials</h2>
      <h1>What Student Says</h1>
      <div className="t-box">
        <i
          className="ri-arrow-right-circle-fill btn-right"
          onClick={slideForward}
        ></i>
        <i
          className="ri-arrow-left-circle-fill btn-left"
          onClick={slideBackward}
        ></i>
        <div className="slider">
          <ul ref={sliderRef}>
            {[
              {
                name: "Emma Watson",
                img: "https://www.unwomen.org/sites/default/files/2022-10/UN-Women-Goodwill-Ambassador-Emma-Watson-Credit-Celeste-Sloman-853x1280.jpg",
              },
              {
                name: "Chris Hemsworth",
                img: "https://i.pinimg.com/736x/32/df/d2/32dfd2909a72161e6e110b18e6d630c4.jpg",
              },
              {
                name: "Robert Downey Jr.",
                img: "https://images.squarespace-cdn.com/content/v1/662d6dbc571bdb21fdbc79b5/74f0978e-7e70-4fe4-a8dc-c05112b758ca/16735402991293.jpg",
              },
              {
                name: "Daniel Radcliffe",
                img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
              },
            ].map((user, index) => (
              <li key={index}>
                <div className="slide">
                  <div className="user-info">
                    <img src={user.img} alt={user.name} />
                    <div className="mini">
                      <h3>{user.name}</h3>
                      <span>Student University</span>
                    </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Legacy was one of the best
                    decisions I've ever made. The supportive community and
                    facilities exceeded my expectations.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
