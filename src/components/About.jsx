import React from "react";
import "../styles/about.css";

const About = () => (
  <section className="about-area section-padding" id="about">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
          <div className="about-card">
            <div className="card-inner">
              {/* Card Front */}
              <div className="front">
                <div className="cover">
                  <img src="/static/picture/cover.png" alt="Cover" />
                </div>
                <div className="user">
                  <img src="/static/picture/person.jpg" alt="Jingke" />
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="name">Jingke Liang</h4>
                    <span className="profession">Web Developer</span>
                    <div><i className="fa fa-map-marker fa-fw"></i> Guelph, Canada</div>
                    <div><i className="fa fa-university fa-fw"></i> Alum @ University of Toronto</div>
                    <div><i className="fa fa-institution fa-fw"></i> Fanshawe, University of Guelph</div>
                    <div><i className="fa fa-envelope-o fa-fw"></i> jingkeliang88@gmail.com</div>
                  </div>
                  <div className="footer">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Back */}
              <div className="back">
                <div className="header">
                  <span>"Every step counts."</span>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Experience</h4>
                    <span>
                      Since 2025, I’ve been rebuilding my portfolio with new designs and technologies.
                    </span>
                    <h4 className="text-center mt-3">Profile</h4>
                    <span>
                      Hello! I’m Jingke Liang, a web developer from Guelph, Canada. I enjoy creating
                      engaging web experiences and have experience in Python, Java, HTML, and
                      JavaScript.
                    </span>
                  </div>
                </div>
                <div className="footer">
                  <div className="social-links text-center">
                    <button className="social-btn" aria-label="Facebook">
                      <i className="fa fa-facebook fa-fw"></i>
                    </button>
                    <button className="social-btn" aria-label="Google">
                      <i className="fa fa-google-plus fa-fw"></i>
                    </button>
                    <button className="social-btn" aria-label="Twitter">
                      <i className="fa fa-twitter fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Details */}
        <div className="col-lg-7 col-md-6">
          <div className="about-details">
            <span className="subheading">About Me</span>
            <h2 className="mb-4">
              A Full-stack Developer<br />& Aspiring Network Engineer<br />Based in Canada
            </h2>

            <div className="skill-ara">
              {[
                ["Python", 90],
                ["React", 95],
                ["Data Mining", 85],
                ["Website Migration & SEO+GEO", 95],
                ["UI & UX", 90],
                ["Business Planning", 85],
                ["Network Monitoring & Troubleshooting", 80],
              ].map(([skill, percent]) => (
                <div className="single-skill" key={skill}>
                  <div className="progress-count d-flex justify-content-between">
                    <h4>{skill}</h4>
                    <span>{percent}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/static/doc/Jingke_Liang_Resume_2025_Updated.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn mt-4"
              data-text="Download CV"
            >
              {"Download CV".split("").map((ch, i) => (
                <span key={i}>{ch}</span>
              ))}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
