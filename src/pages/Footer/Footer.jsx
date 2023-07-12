import React from "react";
import "./Footer.css";
import { dark, house, pub } from "../../assets";
const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footer_heading">
        <div className="footer_heading_cover">
          {" "}
          <h1 className="heading-font">
            Discover The <br />
            Brewing Process
          </h1>
          <p className="normal-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <h1 className="heading-font">Hosting A Party?</h1>
          <p className="normal-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="footer2">
          <h1 className="heading-font">Own a Pub or Bar?</h1>
          <p className="normal-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default Footer;
