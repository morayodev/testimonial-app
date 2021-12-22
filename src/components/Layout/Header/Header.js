import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center heading">
        <div>
          <h1 style={{fontSize:"0.8rem"}}>morayo</h1>
        </div>
        <div>
          <ul className="d-md-flex d-none align-items-center m-0">
            <li className="px-3 heading-list">
              <a href="#">ABOUT US</a>
            </li>
            <li className="px-3 heading-list">
              <a href="#">STORES</a>
            </li>
            <li className="px-3 heading-list">
              <a href="#">CONTACT</a>
            </li>
            <li className="px-3 heading-list">
              <a href="#">LOG IN</a>
            </li>
              <button className="heading-signup px-3">Sign up</button>
          </ul>
        </div>
      </div>
     
    </>
  );
};
export default Header;
