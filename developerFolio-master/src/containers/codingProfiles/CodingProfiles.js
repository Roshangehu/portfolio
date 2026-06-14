import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {codingProfilesSection} from "../../portfolio";
import "./CodingProfiles.scss";

function ProfileIcon({icon}) {
  if (icon === "leetcode") {
    return <i className="fas fa-code profile-icon-fa leetcode-icon" />;
  }
  if (icon === "github") {
    return <i className="fab fa-github profile-icon-fa github-icon" />;
  }
  if (icon === "unstop") {
    return <span className="profile-icon-text unstop-icon">U</span>;
  }
  if (icon === "codolio") {
    return <span className="profile-icon-text codolio-icon">C</span>;
  }
  return <i className="fas fa-link profile-icon-fa" />;
}

export default function CodingProfiles() {
  const {isDark} = useContext(StyleContext);

  if (!codingProfilesSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="coding-profiles">
        <div className="coding-profiles-container">
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {codingProfilesSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle coding-profiles-subtitle"
                : "subTitle coding-profiles-subtitle"
            }
          >
            {codingProfilesSection.subtitle}
          </p>
          <div className="coding-profiles-grid">
            {codingProfilesSection.profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isDark
                    ? "coding-profile-card coding-profile-card-dark"
                    : "coding-profile-card coding-profile-card-light"
                }
              >
                <div className="coding-profile-icon">
                  <ProfileIcon icon={profile.icon} />
                </div>
                <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {profile.name}
                </h3>
                <p
                  className={
                    isDark ? "dark-mode card-subtitle" : "card-subtitle"
                  }
                >
                  {profile.description}
                </p>
                <span className="coding-profile-link">View Profile →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
