import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.leetcode ? (
        <a
          href={socialMediaLinks.leetcode}
          className="icon-button leetcode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <i className="fas fa-code"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.unstop ? (
        <a
          href={socialMediaLinks.unstop}
          className="icon-button unstop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Unstop"
        >
          <span className="unstop-letter">U</span>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
