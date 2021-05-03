import React from "react";
import { instagram, facebook, twitter } from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-image" src={img} alt="icon" width={20} height={20} />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-wrapper">
        <Icon img={instagram} />
        <Icon img={facebook} />
        <Icon img={twitter} />
      </div>
      <div className="social-wrapper">
        <p className="unnamed-character-style-19">Terms &amp; Condition</p>
        <p className="unnamed-character-style-19">&#8739;</p>
        <p className="unnamed-character-style-19">
          copyright &copy; 2018. All rights reserved. PT Radya Gita Bahagi
        </p>
      </div>
    </div>
  );
};

export default Footer;
