import React from "react";
import HeroBanner from "../../assets/subscribe-banner 1.png";
import "./HeroMaganize.css";

const HeroMaganize = () => {
  return (
    <div className="HeroSubscription ">
      <div className="row justify-content-center flex-column-reverse flex-md-row col-12 col-md-10 m-auto">
        <div className="HeroBanner col-12 col-md-6">
          <img className="col-12" src={HeroBanner} alt="subscribeBanner" />
        </div>
        <div className="col-12 col-md-4 HeroBannerText">
          <div className="">
            <h3 className="col-md-11 col-12">Be a member of our community </h3>
            <p className="col-md col-12">
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </p>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control HeroSubscriptionbtn"
              placeholder="enter your email address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text HeroSubscription-submit" id="basic-addon2">
              SUBSCRIBE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroMaganize;
