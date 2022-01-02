import React from "react";
import facebook from "../../../assets/Vector (3).png";
import instagram from "../../../assets/ig.png";
import Linkedin from "../../../assets/Vector (2).png";
import twitter from "../../../assets/tw.png";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Footer container-fluid mx-0 px-0 py-5">
        <div className="col-md-10 col-12 m-auto">
          <div className="row">
            <div className="col-md-2 col-6 p-0">
              <ul>
                <li className="footer-list">Company</li>
                <li>Marketplace</li>
                <li>Magazine</li>
                <li>Seller</li>
                <li>Wholesale</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="col-md-2 col-6 p-0">
              <ul>
                <li className="footer-list">Products</li>
                <li>Contact us</li>
                <li>Partner with us</li>
                <li>Advertise with us</li>
                <li>Help/FAQs</li>
              </ul>
            </div>
            <div className="col-md-3 col-6 p-0">
              <ul>
                <li className="footer-list"> Career</li>
                <li>Become a Campus Rep</li>
                <li>Become a Vasiti Influencer</li>
                <li>Become a Campus writer</li>
                <li>Become an Affiliate</li>
              </ul>
            </div>
            <div className="col-md-2 col-6 p-0">
              <ul>
                <li className="footer-list">Get in touch</li>
                <li>Marketplace</li>
                <li>Magazine</li>
                <li>Seller</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="col-md-3 col-12 p-0">
              <ul className="">
                <li className="footer-list">Join our community</li>
                <div className="d-flex">
                  <li className="footer-socialMedia mx-2">
                    <img src={facebook} alt="facebook" />
                  </li>

                  <li className="text-center footer-socialMedia mr-2">
                    <img src={instagram} alt="instagram" />
                  </li>
                  <li className="mx-2 footer-socialMedia ">
                    <img src={twitter} alt="twitter" />
                  </li>
                  <li className="mx-2 footer-socialMedia ">
                    <img src={Linkedin} alt="Linkedin" />
                  </li>
                  
                </div>
                <li className="pt-5">Email Newsletter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
