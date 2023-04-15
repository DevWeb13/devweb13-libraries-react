import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

export function PresentationProject({ projectData }) {
  return (
    <div className="presentationProjectWrapper">
      {}
      <div className="presentationProjectTitle">
        <h2>{projectData.title}</h2>
      </div>

      <div className="presentationProjectlogo">
        <img src={projectData.logo} alt={`${projectData.name}logo`} />
      </div>

      <div className="presentationProjectImage">
        <img src={projectData.image} alt={`${projectData.name}mockup`} />
      </div>

      <div className="presentationProjectLink">
        <a href={projectData.link}>{projectData.link}</a>
      </div>

      <div className="presentationProjectDescription">
        <h2>Description</h2>
        <p>{projectData.description}</p>
      </div>

      <div className="presentationProjectFeatures">
        <h2>Fonctionnalités</h2>
        <ul>
          {projectData.features.map((feature) => {
            return (
              <li className="presentationProjectKeyBenefit" key={feature}>
                <h3>{feature}</h3>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="presentationProjectUpcomingFeatures">
        <h2>Fonctionnalités à venir</h2>
        <ul>
          {projectData.upcomingFeatures.map((upcomingFeature) => {
            return (
              <li
                className="presentationProjectUpcomingFeature"
                key={upcomingFeature}
              >
                <h3>{upcomingFeature}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
