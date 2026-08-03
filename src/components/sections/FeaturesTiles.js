import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Services We Offer",
    paragraph:
      "Rocket.io brings you a galaxy of services, from crafting awe-inspiring websites to developing cutting-edge Point of Sale Systems. Our mission is to deliver digital experiences that elevate your business to new heights.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div>
            <SectionHeader data={sectionHeader} className="center-content m-10" />
          </div>
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                background: "#ffff",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-10 mb-12">Point Of Sale System (POS)</h4>
                  <p className="m-0 text-sm">
                    Embark on a journey with our tailor-made POS systems,
                    ensuring traceability, operational excellence, and timely
                    inventory management. Always stay a step ahead!
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                background: "#ffff",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-10 mb-12">Web Development</h4>
                  <p className="m-0 text-sm">
                    Immerse your audience in a web experience like never before.
                    Our web designers promise a stellar performance and visual
                    aesthetics, creating an extraordinary digital journey for
                    your customers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                background: "#ffff",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-10 mb-12">Quality Assurance Services</h4>
                  <p className="m-0 text-sm">
                    Trust our seasoned QA Engineers to test every aspect of your
                    platform - functional, integration, and usability. Be
                    assured of quality throughout your transformation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
