import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {aboutSection} from "../../portfolio";
import "./About.scss";

export default function About() {
  const {isDark} = useContext(StyleContext);

  if (!aboutSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="about">
        <div className="about-container">
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {aboutSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle about-subtitle"
                : "subTitle about-subtitle"
            }
          >
            {aboutSection.subtitle}
          </p>
          <p
            className={
              isDark ? "dark-mode about-description" : "about-description"
            }
          >
            {aboutSection.description}
          </p>
          <ul className={isDark ? "dark-mode about-list" : "about-list"}>
            {aboutSection.highlights.map((item, index) => (
              <li key={index}>{emoji(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fade>
  );
}
