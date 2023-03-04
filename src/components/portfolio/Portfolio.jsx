import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const PortfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio title of my first project',
    github: 'https://github.com/nwaguchima',
    demo: 'https://github.com/nwaguchima',
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a portfolio title of my second project',
    github: 'https://github.com/nwaguchima',
    demo: 'https://github.com/nwaguchima',
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio title of my third project',
    github: 'https://github.com/nwaguchima',
    demo: 'https://github.com/nwaguchima',
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio title of my fourth project',
    github: 'https://github.com/nwaguchima',
    demo: 'https://github.com/nwaguchima',
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio title of my fifth project',
    github: 'https://github.com/nwaguchima',
    demo: 'https://github.com/nwaguchima',
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio title of my sixth project',
    github: 'https://github.com/nwaguchima',
    demo: 'https://github.com/nwaguchima',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {PortfolioData.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn"
                target={'_blank'}
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target={'_blank'}
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
