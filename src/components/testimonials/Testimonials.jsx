import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import './testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              asperiores neque fuga necessitatibus corporis dolor. Dolor fuga
              eos, blanditiis necessitatibus dolores facilis hic nesciunt labore
              dolore, aliquam optio, harum alias.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              asperiores neque fuga necessitatibus corporis dolor. Dolor fuga
              eos, blanditiis necessitatibus dolores facilis hic nesciunt labore
              dolore, aliquam optio, harum alias.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              asperiores neque fuga necessitatibus corporis dolor. Dolor fuga
              eos, blanditiis necessitatibus dolores facilis hic nesciunt labore
              dolore, aliquam optio, harum alias.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              asperiores neque fuga necessitatibus corporis dolor. Dolor fuga
              eos, blanditiis necessitatibus dolores facilis hic nesciunt labore
              dolore, aliquam optio, harum alias.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
