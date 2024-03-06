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
import image from "../images/mountains-8587802_1920.jpg";

const imageAltText = "Snowing mountains have a better and cool look that admires our will of living in this beautiful world";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Apply 45 Strong class method in python ",
    description:
      " In this i apply 45 strong class methods to determine and extract different claases in various ways.",
    url: "https://github.com/usmangujjar009/Apply-45-Strong-Method-class_3-",
  },
  {
    title: "Hello World with 6 different IDE's",
    description:
      "Inthis program we execute the code of hello world with 6 different IDE's like jupyter notebook,anaconda,vs code e.t.c",
    url: "https://github.com/usmangujjar009/Hello-word-with-6-different-IDE-s",
  },
  {
    title: "Restaurant managment system",
    description:
      ". In this project we make restaurant managment system on java in which a client can order some food from our managment system and client will get that food bill also.In this ysytem we also add up the data of the stuuf available in our store.",
    url: "https://github.com/usmangujjar009/Restaurant-System",
  },
  {
    title: "A.I slides ",
    description:
      "In this repository i have some valuable slide sof artificial intelligence and data science and their use in our daily base life.",
    url: "https://github.com/usmangujjar009/Saylani-Data-Science-Course",
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
