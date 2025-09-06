/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/hero-bg.jpg";

const imageAltText = "foto latar utama portofolio";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height home-section">
      <div className="home-bg-wrapper">
        <img className="background home-bg-image" src={image} alt={imageAltText} />
        <div className="home-bg-overlay"></div>
      </div>
      <div className="home-content">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="home-arrow">
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem", animation: "bounce 1s infinite" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
