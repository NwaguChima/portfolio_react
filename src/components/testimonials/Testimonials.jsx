import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import './testimonials.css';

const testimonialData = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, asperiores neque fuga necessitatibus corporis dolor. Dolor fuga eos, blanditiis necessitatibus dolores facilis hic nesciunt labore dolore, aliquam optio, harum alias.',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Emmanuel Fortmeinor',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, asperiores neque fuga necessitatibus corporis dolor. Dolor fuga eos, blanditiis necessitatibus dolores facilis hic nesciunt labore dolore, aliquam optio, harum alias.',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Joseph Escravos',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, asperiores neque fuga necessitatibus corporis dolor. Dolor fuga eos, blanditiis necessitatibus dolores facilis hic nesciunt labore dolore, aliquam optio, harum alias.',
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Peter Oyibo',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, asperiores neque fuga necessitatibus corporis dolor. Dolor fuga eos, blanditiis necessitatibus dolores facilis hic nesciunt labore dolore, aliquam optio, harum alias.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {testimonialData.map((testimonial) => (
          <article className="testimonial" key={testimonial.id}>
            <div className="client__avatar">
              <img src={testimonial.avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{testimonial.name}</h5>
            <small className="client__review">{testimonial.review}</small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
