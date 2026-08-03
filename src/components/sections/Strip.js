import React from "react";
// import "./Strip.css"; // Import the CSS file
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const Strip = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, ...props }) => {
  return (
    <div className="strip-container">
      {/* Experience Div: */}
      <div className="strip-section mb-10 lg:mb-0">
        <div className="text-center">
          <h2 className="strip-title mb-4">3+</h2>
          <p className="strip-description">Years of Experience</p>
        </div>
      </div>

      {/* Analytics Div 1: Dummy Data */}
      <div className="strip-section mb-10 lg:mb-0">
        <div className="text-center">
          <h2 className="strip-title mb-4">15+</h2>
          <p className="strip-description">Projects</p>
        </div>
      </div>

      {/* Analytics Div 2: Dummy Data */}
      <div className="strip-section">
        <div className="text-center">
          <h2 className="strip-title mb-4">5</h2>
          <p className="strip-description">Average Team Size</p>
        </div>
      </div>
    </div>
  );
};

export default Strip;
