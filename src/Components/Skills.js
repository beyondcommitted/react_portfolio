import React from "react";

export default function Skills({ skill, progress }) {
  return (
    <div className="Skills">
      <div className="skills-container">
        <h5 classname="skill-title">{skill}</h5>
        <div className="skill-bar"></div>
        <p className="skill-text">{progress}</p>
        <div className="skill-progress">
          <div className="progress"></div>
        </div>
        
      </div>
    </div>
  );
}
