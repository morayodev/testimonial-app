import React from "react";
import "./Header.css";
import vasitifavicon from "../../../assets/Vasiti-Logo-black 1.svg";

const Header = () => {
  return (
    <>
      <div className="d-flex  justify-content-evenly align-items-center heading">
        <div className="col-md-6 col-12 py-3 ">
          {/* <h1 style={{fontSize:"0.8rem"}}>Vacrsiti</h1> */}
          <img src={vasitifavicon} alt="vasitiLogo" />
        </div>
        {/* <div className="col-md-6 col-12 mx-auto"> */}
          <ul className="gap-3 d-md-flex d-none align-items-center m-0">
            <li className=" heading-list">ABOUT US</li>
            <li className=" heading-list">STORES</li>
            <li className=" heading-list">CONTACT</li>
            <li className=" heading-list">LOG IN</li>
            <button className="heading-signup ">Sign up</button>
          </ul>
        {/* </div> */}
      </div>
    </>
  );
};
export default Header;
