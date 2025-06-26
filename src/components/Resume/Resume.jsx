
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section light-container-portfolio">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          I am Software Engineering student and full-stack web developer in
          building scalable web applications. My resume highlights academic
          achievements and freelance work. I combine strong theoretical
          knowledge with real-world coding skills, making me well-equipped for
          dynamic software development environments.
        </p>

        <a href="/Heran_resume.pdf" download className="download-btn">
          Download Resume (PDF)
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0">
              <h4>Heran Yimer</h4>
              <p>
                <em>
                  I’m a full-stack web developer and software engineering
                  student. I’ve worked on projects like Netflix, Amazon, and
                  Evangadi Forum, which helped me build strong skills in both
                  frontend and backend development. I enjoy creating clean,
                  efficient code and building applications that users love and
                  delivering them on time.
                </em>
              </p>

              <ul>
                <li>Kombolcha, Ethiopia</li>
                <li>+251 943 00 84 64</li>
                <li>heranyimer@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Software Engineering Student & Full-Stack Web Developer</h4>
              <h5>2023 – Present</h5>
              <p>
                <em>Bahirdar Institute of Technology (BIT)</em>
              </p>
              <p>
                Currently studying Software Engineering, and working different
                full-stack web applicatons using modern languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
