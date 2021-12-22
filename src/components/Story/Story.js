import React, { useState } from "react";
import "./Story.css";
const Story = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [story, setStory] = useState("");
  const [vendor, setVendor] = useState("vendor");
  const [customer, setCustomer] = useState("customer");
  console.log(firstName, "momo");
  console.log(lastName, "momo");
  console.log(story, "momo");

  console.log(vendor, "momo");
  console.log(customer, "momo");

  return (
    <>
      <div>
        <form className="col-md-5 col-12 m-auto px-4 my-4">
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
                      name="customer"
                      value={customer}
                      onChange={(e) => setCustomer(e.target.value)}
                      checked
                      id="flexRadioDefault1"
                      //   name="flexRadioDefault"
                      //   id="flexRadioDefault1"
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
                      value={vendor}
                      name="vendor"
                      onChange={(e) => setVendor(e.target.value)}
                      //   name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label story-question"
                      htmlFor="flexRadioDefault2"
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
    </>
  );
};
export default Story;
