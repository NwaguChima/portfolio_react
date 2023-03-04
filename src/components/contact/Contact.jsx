import React, { useRef, useState } from 'react';
import { MdOutlineMailOutline, MdWhatsapp } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io5';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

import './contact.css';
import BtnLoader from './BtnLoader';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
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
          toast.success(`Message successfully sent!`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            style: {
              color: '#4db5ff',
              background: '#2c2c6c',
              fontSize: '1rem',
            },
          });
        },
        (error) => {
          console.error('Error Log', error.text);
          toast.error(`Message not sent`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      )
      .finally(() => {
        form.current.reset();
        setLoading(false);
      });
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
          <button
            type="submit"
            className="btn btn-primary contact-btn"
            disabled={loading}
          >
            <span>{loading ? 'Sending...' : 'Send Message'}</span>
            <BtnLoader loading={loading} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
