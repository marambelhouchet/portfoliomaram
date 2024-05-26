import React from 'react';

import '../../styles/Works/Works.scss';

import data from '../../data';

// Importing child component
import ProjectCard from '../ProjectCard';

const Works = () => {
  return (
    <>
      <div className="works" id="work">
        <div className="works__container">
          <div className="works__header" id="works__heading">
            <h1 data-aos="fade-down">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                W
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                R
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>
          <div className="works__grid">
            <div className="works__grid-container">
              {data.portfolio.projectCard.cards.map((content) => (
                // Each project cards 
                <ProjectCard key={content.heading} cardContent={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
