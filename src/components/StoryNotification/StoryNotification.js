import React from "react";
import { MdOutlineCelebration } from "react-icons/md";
import "./StoryNotification.css";

const StoryNotification = ({ notificationModalRef, setShowmodal }) => {
  const closeModal = () => {
    if (notificationModalRef.current) {
      const bootstrapModal = window.bootstrap.Modal.getInstance(notificationModalRef.current);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  };

  return (
      // <div className="col-md-5 col-12 m-auto ">
        <div className="row flex-column align-items-center py-5" style={{height:"500px"}}>
          <MdOutlineCelebration className="notification-celeb" />
          <h2 className="col-8 text-center fs-4 ">Thank you for sharing your story!</h2>
          <p className="col-10 text-center  py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="text-center ">
            <button className="Notification-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        {/* </div> */}
    </div>
  );
};
export default StoryNotification;
