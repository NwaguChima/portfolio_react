import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend starts */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>Nestjs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experienced__details">
              <BsPatchCheckFill className="experienced__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
