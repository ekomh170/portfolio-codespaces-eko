/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio-desk.jpg";

const imageAltText = "contoh meja kerja dengan laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ChillAjar 📚",
    description:
      "An e-learning platform built with Laravel + React, a result of a Project Management team collaboration.",
    url: "https://github.com/ekomh170/manpro-sizzlingchilli-backend-chill-ajar",
  },
  {
    title: "Habit Tracker App",
    description:
      "A web app to track daily habits. Built with React + Express, integrated with MongoDB Atlas.",
    url: "https://github.com/ekomh170/frontend-uas-se1-2025-pengingat-habit-semester-4",
  },
  {
    title: "Zentra Force",
    description:
      "UMKM registration system, final project for Cloud Computing, deployed on Google Cloud Compute Engine.",
    url: "https://github.com/ekomh170/zentra-force-umkm",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React and GitHub Codespaces, customized with Copilot.",
    url: "https://github.com/ekomh170/portfolio-codespaces-eko",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            className="portfolio-desk-image"
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
