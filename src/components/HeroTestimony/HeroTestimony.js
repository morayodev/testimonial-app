import React from "react";
import "./HeroTestimony.css";

const HeroTestimony = ({ story }) => {
  return (
    <>
      <div className="Hero-Testimony py-5">
        {story.lenght >= 0 ? (
          <p style={{color:"red"}}>Testimonial Is empty</p>
        ) : (
          <div className="row">
            {story.slice(0,6).map((storyInformation) => (
              <div className="col-12 col-md-4" key={storyInformation.id}>
                <div className="d-flex flex-column justify-content-center justify-content-center">
                  <div className="hero">
                    <img src={storyInformation.preview} alt="HeroTestimonyImage" />
                  </div>
                  <p className="HeroTestimony-Name m-0">
                    {storyInformation.firstName} {storyInformation.lastName}
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="HeroTestimony-location">In ikeja</p>
                    <p className="HeroTestimony-customer">
                      {storyInformation.user}
                    </p>
                  </div>
                  <p className="col-md-9 col-12">{storyInformation.story}</p>
                </div>
              </div>
            ))}
          </div>
        )}
             </div>
    </>
  );
};
export default HeroTestimony;
