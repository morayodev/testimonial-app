import React from "react";
import testimonial from "../../assets/Testimonial image 1.png";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <>
      <div className="row flex-column flex-md-row Hero-Section justify-content-evenly">
        <div className="col-md-6 col-12">
          <div className="HeroText">
            <h1 className="">Amazing Experiences from Our Wonderful Customers</h1>
            <p className="col-md-11 col-12">
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="HeroImage">
            <div >
              <img className="col-12" src={testimonial} alt="testimonial" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
