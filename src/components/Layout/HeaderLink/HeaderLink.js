import React from "react"
import "./HeaderLink.css"
const HeaderLink =()=>{
    return(
        <div className="container-fluid m-0 p-0">
        <ul className=" d-none d-md-flex gap-5  justify-content-center align-items-center heading-link py-3">
          <li className=" heading-list">
          MARKETPLACE
          </li>
          <li className=" heading-list">
           WHOLESALE CENTER
          </li>
          <li className="  heading-list">
            SELLER CENTER
          </li>
          <li className=" heading-list">
           SERVICES
          </li>
          <li className=" heading-list">
            INTERNSHIPS
          </li>
          <li className=" heading-list">
           EVENTS
          </li>
        </ul>
      </div>
    )
}
export default HeaderLink