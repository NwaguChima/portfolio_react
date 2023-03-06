import React from 'react';
import Me from '../../assets/me2.jpg';
import { FaAward, FaFolderOpen } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="profile image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <p>
            Experienced Software Engineer with a strong portfolio of creating
            visually appealing and user-friendly websites and web applications.
            Proficient in HTML, CSS, JavaScript and popular front-end frameworks
            such as React, Nextjs and React Native. I also have experience with
            Nodejs and Python. Strong understanding of responsive design,
            cross-browser compatibility, and web performance optimization.
            Proven ability to work collaboratively with designers, developers,
            and stakeholders to deliver projects on-time and within budget.
            Dedicated to staying current with industry developments and
            continuously improving skills to create engaging and high-quality
            user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
