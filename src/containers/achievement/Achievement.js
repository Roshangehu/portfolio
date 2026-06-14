import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection, achievementHighlights} from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const showHighlights = achievementHighlights.display;
  const showCerts = achievementSection.display;

  if (!showHighlights && !showCerts) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          {showHighlights && (
            <div className="achievement-highlights-section">
              <h1
                className={
                  isDark
                    ? "dark-mode heading achievement-heading"
                    : "heading achievement-heading"
                }
              >
                {achievementHighlights.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle achievement-subtitle"
                    : "subTitle achievement-subtitle"
                }
              >
                {achievementHighlights.subtitle}
              </p>
              <ul
                className={
                  isDark
                    ? "dark-mode achievement-highlights-list"
                    : "achievement-highlights-list"
                }
              >
                {achievementHighlights.items.map((item, index) => (
                  <li key={index}>{emoji(item)}</li>
                ))}
              </ul>
            </div>
          )}

          {showCerts && (
            <>
              <div className="achievement-header">
                <h1
                  className={
                    isDark
                      ? "dark-mode heading achievement-heading"
                      : "heading achievement-heading"
                  }
                >
                  {achievementSection.title}
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode subTitle achievement-subtitle"
                      : "subTitle achievement-subtitle"
                  }
                >
                  {achievementSection.subtitle}
                </p>
              </div>
              <div className="achievement-cards-div">
                {achievementSection.achievementsCards.map((card, i) => {
                  return (
                    <AchievementCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        title: card.title,
                        description: card.subtitle,
                        image: card.image,
                        imageAlt: card.imageAlt,
                        footer: card.footerLink
                      }}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </Fade>
  );
}
