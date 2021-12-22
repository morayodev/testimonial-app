import React from "react";
import "./HeroReview.css";
import blacbeautiful from "../../assets/black-beautiful-ladies-smiling 1.png";
import HeroReviewBorder from "../../assets/Vector 3.png";
const HeroReview = () => {
  return (
    <>
      <div className="HeroReview">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-7">
          <div className="HeroReviewImg">
          <div>
            <img src={blacbeautiful} alt="beautifulgirls" />
          </div>
        </div>
          </div>
          <div className="col-12 col-md-5"> 
           <div className="HeroReviewText pt-5">
          <h2>Tolu & Joy’s Experience</h2>
          <button className="HeroReview-Button">CUSTOMER</button>
          <p>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <p className="p-0 m-0">Share your own story!</p>
          <img src={HeroReviewBorder} alt="HeroReviewBorder" />
        </div></div>
        </div>
        
      
      </div>
    </>
  );
};
export default HeroReview;
