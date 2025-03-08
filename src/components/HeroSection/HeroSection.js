import React from "react";
import testimonial from "../../assets/Group 81.svg";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <>
      <div className="align-items-center d-flex flex-column  flex-lg-row Hero-Section  gap-lg-0 gap-3 justify-content-evenly">
      {/* <div className="align-items-start align-items-lg-center d-flex flex-column  flex-lg-row Hero-Section gap-lg-0 gap-3 justify-content-evenly"> */}
        {/* <div className="row align-items-center flex-column flex-md-row Hero-Section gap-lg-0 gap-3 justify-content-evenly"> */}
        <div className="col-lg-6 col-12 p-0">
          <div className="HeroText ">
            <h1 className="">Amazing Experiences from Our Wonderful Customers</h1>
            <p className="col-lg-11 col-12 fs-6">
              Here is what customers and vendors are saying about us, you can share your stories with us too.
            </p>
          </div>
        </div>
        <div className="">
          <div className="col-lg-6 col-12">
            <div className=" ">
              <img className="HeroImage" src={testimonial} alt="testimonial" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
