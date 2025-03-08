import React, { useEffect, useRef, useState } from "react";
import "./Story.css";
import HeroTestimony from "../HeroTestimony/HeroTestimony";
import StoryNotification from "../StoryNotification/StoryNotification";

const Story = ({ setShowmodal, showModal }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState();
  const [user, setUser] = useState();
  const [preview, setPreview] = useState();
  const [storydetails, setStorydetails] = useState([]);

  const modalRef = useRef(null);
  const notificationModalRef = useRef(null); // Ref for StoryNotification modal

  const storyInformation = (firstName, lastName, story, user, preview) => {
    setStorydetails([
      ...storydetails,
      {
        firstName,
        lastName,
        story,
        user,
        preview,
        id: Math.floor(Math.random() * 100),
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled before submitting
    if (!firstName || !lastName || !story || !user || !preview) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    storyInformation(firstName, lastName, story, user, preview);
    setFirstname("");
    setLastname("");
    setImage(null);
    setStory("");
    setUser("");
    // setPreview(null);
    document.getElementById("imageUpload").value = "";
    document.querySelectorAll('input[name="user"]').forEach((radio) => {
      radio.checked = false;
    });

    // Close Story modal
    if (modalRef.current) {
      const bootstrapModal = window.bootstrap.Modal.getInstance(modalRef.current);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  };

  useEffect(() => {
    // Show image preview when user uploads
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(() => {
    // Listen for Bootstrap modal close event to open StoryNotification modal
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.addEventListener("hidden.bs.modal", () => {
        if (notificationModalRef.current) {
          const notificationModal = new window.bootstrap.Modal(notificationModalRef.current);
          notificationModal.show();
        }
      });
    }

    // return () => {
    //   if (modalElement) {
    //     modalElement.removeEventListener("hidden.bs.modal", () => {
    //       if (notificationModalRef.current) {
    //         const notificationModal = new window.bootstrap.Modal(notificationModalRef.current);
    //         notificationModal.show();
    //       }
    //     });
    //   }
    // };
  }, []);

  return (
    <>
      <HeroTestimony story={storydetails} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="testimonymodal" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add your Testimony
        </button>
      </div>
      <div className="col-md-5 col-12">
        <div
          ref={modalRef}
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form onSubmit={handleSubmit} className="col-12 m-auto px-4 my-4">
                  <div className="row">
                    <h2>Share your amazing story!</h2>
                    <div className="col-12">
                      <label htmlFor="imageUpload" className="form-label story-label">
                        Upload your Picture
                      </label>
                      <input
                        id="imageUpload"
                        type="file"
                        name="image-upload"
                        accept="image/*"
                        className="form-control"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setImage(file || null);
                        }}
                      />
                    </div>
                    <div className="row my-3 mx-0 p-0">
                      <div className="col-6">
                        <label className="form-label story-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label story-label">Last Name</label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastname(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="form-label story-label">Share your story</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="row pt-3">
                      <div className="col-7 story-question">
                        <p>What did you interact with Vasiti as?</p>
                      </div>
                      <div className="col-5">
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="form-check story-checkbox">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="customer"
                              name="user"
                              onChange={(e) => setUser(e.target.value)}
                              required
                            />
                            <label className="form-check-label story-question">Customer</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="vendor"
                              name="user"
                              onChange={(e) => setUser(e.target.value)}
                            />
                            <label className="form-check-label story-question">Vendor</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="story-btn mt-3">
                    <button type="submit">Share your story!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ StoryNotification as a Bootstrap Modal */}
      <div
        ref={notificationModalRef}
        className="modal fade"
        id="storyNotificationModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <StoryNotification notificationModalRef={notificationModalRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
