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
import image from "../images/retro-gamepad-colored-paper-background-entertainment_175682-9217.avif";

const imageAltText = "Controller";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Devi",
    description:
      "A narrative driven game focused on healing trauma.",
    url: "https://arin1.itch.io/devi",
  },
  {
    title: "Exams are Stupid",
    description:
      "A simple and fun hyper-casual game.",
    url: "https://play.google.com/store/apps/details?id=com.redcrossgames.examsarestupid",
  },
  {
    title: "Bounce Ball",
    description:
      "Simple platformer game",
    url: "https://play.google.com/store/apps/details?id=com.redcrossgames.taptobounce",
  },
  {
    title: "Cosmic Drive",
    description:
      "A Web3 game based on Etherium blockchain",
    url: "https://github.com/Sarosij/Cosmic_Drive",
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
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
