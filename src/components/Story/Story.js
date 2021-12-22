import React, { useEffect, useState,useRef } from "react";
// import { useNavigate,Routes,Route } from "react-router-dom";
// import StoryNotification from "../StoryNotification/StoryNotification"
import "./Story.css";
import HeroTestimony from "../HeroTestimony/HeroTestimony";

const Story = ({ setShowmodal}) => {
  // let navigate=useNavigate()
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState();
  const [user, setUser] = useState();
  const [preview,setPreview]=useState();
  const [storydetails, setStorydetails] = useState([]);
  // const fileInputRef=useRef()
  const storyInformation = (firstName, lastName, story, user, preview) => {
    setStorydetails([
      ...storydetails,
      {
        firstName,
        lastName,
        story,
        user,
        image,
        id: Math.floor(Math.random() * 100),
      },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // fileInputRef.current.click()
    storyInformation(firstName, lastName, story, user,preview);
    // navigate("/story-sucessful");
    setShowmodal()
  };
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend=()=>{
        setPreview(reader.result)
      };
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image]);
  return (
    <>
      <HeroTestimony story={storydetails} />
      {/* <Routes>
        <Route path="story-sucessful" element={<StoryNotification />} />
      </Routes> */}
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="testimonymodal"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add your Testimony
        </button>
      </div>
      <div className="col-md-5 col-12">
        <div
          class="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <form
                  onSubmit={handleSubmit}
                  className="col-12 m-auto px-4 my-4"
                >
                  <div className="row">
                    <h2>Share your amazing story!</h2>
                    <div className="col-12">
                      <label
                        htmlFor="imageUpload"
                        className="form-label story-label"
                      >
                        Upload your Picture
                      </label>
                      <input
                        id="imageUpload"
                        type="file"
                        name="image-upload"
                        accept="image/*"
                        className="form-control"
                        onChange={(event)=>{
                          const file = event.target.files[0];
                          if (file) {
                            setImage(file);
                          } else {
                            setImage(null);
                          }
                        }}
                        // ref={fileInputRef}
                      />
                    </div>
                    <div className="row my-3 mx-0 p-0">
                      <div className="col-6">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label story-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-6">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label story-label"
                        >
                          Last Name
                        </label>
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
                      <label htmlFor="" className="form-label story-label">
                        Share your story
                      </label>
                      <textarea
                        class="form-control"
                        rows="5"
                        type="text"
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        className="form-control"
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
                              id="flexRadioDefault1"
                              required
                            />
                            <label
                              className="form-check-label story-question"
                              htmlFor="flexRadioDefault1"
                            >
                              Customer
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="vendor"
                              name="user"
                              onChange={(e) => setUser(e.target.value)}
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label story-question"
                              htmlFor="flexRadioDefault2"
                              required
                            >
                              Vendor
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="story-btn mt-3">
                    <button>Share your story!</button>
                  </div>
                </form>
              </div>
              {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
            </div>
          </div>
        </div>

        {/* <form
          onSubmit={handleSubmit}
          className="col-md-5 col-12 m-auto px-4 my-4"
        >
          <div className="row">
            <h2>Share your amazing story!</h2>
            <div className="col-12">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label story-label"
              >
                Upload your Picture
              </label>
              <input type="" className="form-control" />
            </div>
            <div className="row my-3 mx-0 p-0">
              <div className="col-6">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label story-label"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label story-label"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="" className="form-label story-label">
                Share your story
              </label>
              <input
                type="text"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                className="form-control"
              />
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
                      id="flexRadioDefault1"
                  
                    />
                    <label
                      className="form-check-label story-question"
                      htmlFor="flexRadioDefault1"
                    >
                      Customer
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="vendor"
                      name="user"
                      onChange={(e) => setUser(e.target.value)}
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label story-question"
                      htmlFor="flexRadioDefault2"
                    >
                      Vendor
                    </label>
                    {/* <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        // name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Customer
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        // name="flexRadioDefault"
                        onChange={(e) => setVendor(e.target.value)}
                        value={vendor}
                        id="flexRadioDefault2"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Vendor
                      </label>
                    </div> */}
        {/* </div>
                </div>
              </div>
            </div>
          </div>
          <div className="story-btn mt-3">
            <button>Share your story!</button>
          </div>
        </form>  */}
      </div>
    </>
  );
};
export default Story;
