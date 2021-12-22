import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="d-flex container justify-content-between align-items-center heading">
        <div>
          <h1 style={{fontSize:"0.8rem"}}>Varsiti</h1>
        </div>
        <div>
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
