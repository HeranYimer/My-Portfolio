
import React from "react";
import aboutImg from "../../assets/images/about.png"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
const About = () => {
  return (
    <section id="about" className="about section light-container-about">
      {/* Section Title */}
      <div className="container section-title aboutpage" data-aos="fade-up">
        <h2>About</h2>
        <p>
          I’m a dedicated full-stack web developer and a 4th-year Software
          Engineering student building real-world web applications. I specialize
          in developing both frontend and backend systems using modern
          technologies and best practices.
        </p>
      </div>

      {/* Content */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={aboutImg} className="img-fluid oval-image" alt="About" />
          </div>
          <div className="col-lg-8 content">
            <h2>Software Engineering Student &amp; Web Developer</h2>
            <p className="fst-italic py-3">
              With a strong foundation in software engineering principles and
              full-stack development, I’ve built projects like a Netflix and
              Amazon clone, and a community platform inspired by Evangadi Forum.
              I enjoy turning designs into scalable and user-friendly web
              solutions.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>1 Dec 2003</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Github:</strong>{" "}
                    <a href="https://github.com/HeranYimer">
                      github.com/HeranYimer
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>LinkdIn:</strong>{" "}
                    <a href="https://www.linkedin.com/in/heran-yimer/">
                      linkedin.com/in/heran-yimer/
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+251 943 00 84 64</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Kombolcha, Ethiopia</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>21</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>heranyimer@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="py-3 aboutp">
              As a passionate full-stack web developer, I’m currently open to
              freelance opportunities where I can contribute to meaningful
              projects. I enjoy solving real-world problems with clean,
              efficient code — from building interactive UIs to creating robust
              backend systems. Whether working independently or with a team, I
              bring strong technical and communication skills to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
