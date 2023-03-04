import React, { useRef } from 'react';
import { MdOutlineMailOutline, MdWhatsapp } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io5';
import emailjs from 'emailjs-com';

import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ouj73hy',
        'template_qxfigmu',
        form.current,
        '_Y5qpJh1HL-QIweHY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__icon" />
            <h4>Email</h4>
            <h5>nwaguchima48@gmail.com</h5>
            <a href="mailto:nwaguchima48@gmail.com">Send an email</a>
          </article>

          <article className="contact__option">
            <IoLogoLinkedin className="contact__icon" />
            <h4>Linkedin</h4>
            <h5>Chima Nwagu</h5>
            <a
              href="https://www.linkedin.com/in/chima-nwagu-3972a6179/"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              Send an Message
            </a>
          </article>

          <article className="contact__option">
            <MdWhatsapp className="contact__icon" />
            <h4>Whatsapp / Phone</h4>
            <h5>+234 90 3188 9190</h5>
            <a
              href="https://wa.me/+2349031889190"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
