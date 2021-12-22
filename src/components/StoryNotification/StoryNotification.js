import React from "react";
import {MdOutlineCelebration} from "react-icons/md"
import "./StoryNotification.css"
const StoryNotification = () => {
  return (
    <>
      <div className="col-md-5 col-12 m-auto ">
        <div className="row flex-column align-items-center px-4">
            {/* <div className="notification-celeb"> */}
            <MdOutlineCelebration className="notification-celeb"/>

            {/* </div> */}
          <h2 className="col-8 text-center">
            Thank you for sharing your story!
          </h2>
          <p className="col-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="text-center">
            <button className="Notification-btn">Close</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoryNotification;