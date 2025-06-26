import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiFirebase, SiMysql, SiExpress } from "react-icons/si";
import { BiZoomIn, BiLinkAlt } from "react-icons/bi";
import tmdbIcon from "../../assets/icons/TMDB.svg";
import "../../App.css";
import portfolioData from "../../data/portfolioData";

const iconMap = {
  react: <FaReact color="#61DBFB" />,
  node: <FaNodeJs color="#3C873A" />,
  css: <FaCss3Alt color="#264de4" />,
  express: <SiExpress color="#ffffff" fontSize="45px" />,
  firebase: <SiFirebase color="#FFA611" />,
  mysql: <SiMysql color="#00758F" fontSize="75px" />,
  tmdb: (
    <img
      src={tmdbIcon}
      alt="TMDB"
      style={{ width: "75px", height: "28px", objectFit: "contain" }}
    />
  ),
};

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="portfolio"
      className="portfolio section light-background light-container-portfolio"
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Here are some of the web applications I’ve built, including clones of
          platforms like Netflix and Amazon, as well as a community-driven
          Question and Answer forum Evangadi. Each project demonstrates my
          skills across frontend, backend, and database development.
        </p>
      </div>

      <div className="container ">
        <div className="row" data-aos="fade-up" data-aos-delay="200">
          {portfolioData.map((project) => (
            <div className="col-lg-4 col-md-6 portfolio-item" key={project.id}>
              <div className="portfolio-content h-100 position-relative">
                <img
                  src={project.image}
                  className="img-fluid project-image"
                  alt={project.title}
                />

                {/* Overlay on Hover */}
                <div className="portfolio-overlay">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  {/* Tech Icons with Tooltip */}
                  {project.techIcons && (
                    <div className="tech-icons-center">
                      {project.techIcons.map((tech, index) => (
                        <span
                          key={index}
                          className="tech-icon large"
                          title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                        >
                          {iconMap[tech]}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons with Icons, Smaller Size */}
                  <div className="portfolio-buttons mt-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-demo"
                        style={{
                          padding: "6px 12px",
                          fontSize: "0.85rem",
                        }}
                      >
                        <BiZoomIn style={{ marginRight: "6px" }} />
                        Live Demo
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-code"
                        style={{
                          padding: "6px 12px",
                          fontSize: "0.85rem",
                          marginLeft: "10px",
                        }}
                      >
                        <BiLinkAlt style={{ marginRight: "6px" }} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
