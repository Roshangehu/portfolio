import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  aboutSection,
  workExperiences,
  skillsSection,
  codingProfilesSection,
  bigProjects,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewAbout = aboutSection.display;
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewCodingProfiles = codingProfilesSection.display;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display && greeting.resumeLink;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewAbout && (
            <li>
              <a href="#about">About</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewCodingProfiles && (
            <li>
              <a href="#coding-profiles">Coding Profiles</a>
            </li>
          )}
          <li>
            <a href="#education">Education</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
