import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import TextareaAutosize from "react-textarea-autosize";

import "../../App.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null); // { text: string, type: 'success' | 'error' }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);

          setMsg({ text: " Message sent successfully!", type: "success" });
          form.current.reset();
          setTimeout(() => setMsg(null), 5000);
        },
        (error) => {
          console.error("Email error:", error.text);

          setMsg({
            text: "Something went wrong. Please try again, or use other contact methods.",
            type: "error",
          });
          setTimeout(() => setMsg(null), 5000);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact section light-container-contact">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          I'm currently available for freelance work and open to collaborating
          on serious web development projects. Reach out if you’re looking for a
          committed full-stack developer to help bring your ideas to life.
        </p>
      </div>
      <div className="text">You can submit your message here !</div>

      <div className="container " data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Left Contact Info */}
          <div className="col-lg-5">
            <div className="info-wrap light-container-contact-info">
              <div
                className="info-item d-flex "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Kombolcha, Ethiopia</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>
                    <a href="tel:+251943008464">+251 943 00 84 64</a>
                  </p>

                  <p>
                    <a href="tel:+251717358464">+251 717 35 84 64</a>
                  </p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-whatsapp flex-shrink-0"></i>
                <div>
                  <h3>WhatsApp</h3>
                  <p>
                    <a
                      href="https://wa.me/251943008464"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +251 943 00 84 64
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-telegram flex-shrink-0"></i>
                <div>
                  <h3>Telegram</h3>
                  <p>
                    <a
                      href="https://t.me/heran_yimer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @heran_yimer
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:heranyimer@gmail.com">
                      heranyimer@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right EmailJS Form */}
          <div className="col-lg-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="email-form light-container-contact-right"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2 formtext">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2 formtext">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email-field"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2 formtext">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject-field"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2 formtext">
                    Message
                  </label>
                  <TextareaAutosize
                    name="message"
                    id="message-field"
                    className="form-control"
                    placeholder="Message"
                    minRows={5}
                    required
                  />
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {/* Message below form */}
                {msg && (
                  <div
                    style={{
                      marginTop: "10px",
                      color: msg.type === "success" ? "green" : "red",
                    }}
                    role="alert"
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            </form>
          </div>
          {/* End Right Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
