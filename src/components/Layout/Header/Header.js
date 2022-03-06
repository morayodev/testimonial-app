import React from "react";
import "./Header.css";
import vasitifavicon  from "../../../assets/vasiti.png";


const Header = () => {
  return (
    <>
    
      <div className="row justify-content-evenly align-items-center heading">
        <div className="col-md-6 col-12">
          {/* <h1 style={{fontSize:"0.8rem"}}>Vacrsiti</h1> */}
          <img src={vasitifavicon} alt="vasitiLogo"/>
        </div>
        <div className="col-md-6 col-12">
          <ul className="d-md-flex d-none align-items-center m-0">
            <li className="px-3 heading-list">
            ABOUT US
            </li>
            <li className="px-3 heading-list">
           STORES
            </li>
            <li className="px-3 heading-list">
             CONTACT
            </li>
            <li className="px-3 heading-list">
              LOG IN
            </li>
              <button className="heading-signup px-3">Sign up</button>
          </ul>
        </div>
      </div>
     
    </>
  );
};
export default Header;
