import React from "react"
import "./HeaderLink.css"
const HeaderLink =()=>{
    return(
        <div className="container-fluid">
        <ul className=" d-none d-md-flex heading-link py-2">
          <li className="px-4 heading-list">
          MARKETPLACE
          </li>
          <li className="px-4 heading-list">
           WHOLESALE CENTER
          </li>
          <li className="px-4  heading-list">
            SELLER CENTER
          </li>
          <li className=" px-4 heading-list">
           SERVICES
          </li>
          <li className="px-4 heading-list">
            INTERNSHIPS
          </li>
          <li className="px-4 heading-list">
           EVENTS
          </li>
        </ul>
      </div>
    )
}
export default HeaderLink