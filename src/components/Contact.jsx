import React, { useRef } from "react";
import "../styles/contact.css";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = encodeURIComponent(form.elements.name.value);
    const email = encodeURIComponent(form.elements.email.value);
    const message = encodeURIComponent(form.elements.message.value);

    const recipient = "jingkeliang88@gmail.com";
    const subject = `Message from ${decodeURIComponent(name)}`;
    const body = `Greetings Jingke,%0A%0Ahope this message finds you well.%0A%0A I am ${decodeURIComponent(
      name
    )}, reaching out via your portfolio website.%0A%0A${decodeURIComponent(message)}.%0A%0A%0A%0A%0AThank you for your time and consideration.%0A%0A%0ABest regards,%0A${decodeURIComponent(name)}%0A${decodeURIComponent(email)}`;

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    form.reset(); // optional: clear form after submission
  };

  return (
    <section className="contact-area section-padding" id="contact">
      <div className="section-title">
        <h3>Contact</h3>
      </div>
      <div className="container">
        <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group d-flex justify-content-between name-email">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              className="form-control"
              required
            ></textarea>
          </div>

          <div className="input-group">
            <button type="submit" className="btn" data-text="Send Message">
              {"Send Message".split("").map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
