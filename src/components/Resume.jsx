import React from "react";
import "../styles/resume.css";

const Resume = () => (
  <section className="resume-area section-padding" id="resume">
    <div className="section-title">
      <h3>Resume</h3>
      <span></span>
    </div>

    <div className="resume">
      <div className="container">
        <div className="row">
          {/* Experience Section */}
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="resume-title">
              <div className="icon text-color">
                <i className="icon-briefcase"></i>
              </div>
              <h4>Experience</h4>
            </div>

            <div className="resume-items experience">
              <div className="resume-item active">
                <div className="date">February 2025 - August 2025</div>
                <h5>Web Developer Associate</h5>
                <div className="company">
                  <i className="fa fa-building fa-fw"></i> Schulich School of Medicine & Dentistry, University of Western Ontario
                </div>
                <div className="single-post-text">
                  <p>- Collaborated on front-end development for high-traffic academic web pages and webpages for the Rapport Magazine 2025, enhancing accessibility and user engagement.</p>
                  <p>- Designed and implemented AI-driven data visualizations using Google Charts, turning complex data into interactive, user-friendly insights.</p>
                  <p>- Conducted comprehensive technical QA across web pages: accessibility, responsiveness, loading speed, and structured data (e.g., LD Schema, Robots.txt) to improve crawlability and SEO performance.</p>
                  <p>- Collaborated with cross-functional teams to prototype and refine content, accelerating delivery timelines and improving overall site responsiveness.</p>
                </div>
              </div>

              <div className="resume-item">
                <div className="date">2021 - 2023</div>
                <h5>Full-stack Developer</h5>
                <div className="company">
                  <i className="fa fa-building fa-fw"></i> StorageVault Canada Inc.
                </div>
                <div className="single-post-text">
                  <p>- Participated in sprint planning, daily stand-ups, and retrospectives to ensure timely and high-quality deliverables within the DataVault Agile team, working closely with business leaders and designers.</p>
                  <p>- Developed React components (date picker, toggle switch, pagination, hover effects, map API) to enhance interactivity and user experience.</p>
                  <p>- Supported testing and maintenance for client portals and product pages using Node.js and PHP, following best practices in data security and cloud integration.</p>
                  <p>- Identified and resolved technical issues, ensuring smooth operation and user satisfaction.</p>
                </div>
              </div>

              <div className="resume-item">
                <div className="date">June 2021 - October 2021</div>
                <h5>Full Stack Developer Intern</h5>
                <div className="company">
                  <i className="fa fa-building fa-fw"></i> FlexSpace Logistics, subsidiary of StorageVault Canada
                </div>
                <div className="single-post-text">
                  <p>- Collaborated with a cross-functional team in FlexSpace Logistics, actively engaging in business discussions to align site design with company goals.</p>
                  <p>- Designed wireframes using Figma and developed site functionalities with WebFlow, contributing to brand messaging and higher conversion rates.</p>
                  <p>- Engaged in database optimization, troubleshooting, and improving data retrieval efficiency.</p>
                  <p>- Identified and resolved technical issues to ensure a seamless user experience and stable system performance.</p>
                </div>
              </div>

              <div className="resume-item">
                <div className="date">June 2018 - Present</div>
                <h5>Volunteering Website Maintenance Helper</h5>
                <div className="company">
                  <i className="fa fa-building fa-fw"></i> Mississauga Carmel Mandarin Alliance Church
                </div>
                <div className="single-post-text">
                  <p>- Maintained a user-friendly, up-to-date website for the church community using WordPress.</p>
                  <p>- Collaborated successfully with the Elder Board to meet technical and design requirements, enhancing functionality and accessibility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="col-md-6 border-line-v">
            <div className="resume-title">
              <div className="icon text-color">
                <i className="icon-graduation"></i>
              </div>
              <h4>Education</h4>
            </div>

            <div className="resume-items education">
              <div className="resume-item">
                <div className="date">2023 - Present</div>
                <h5>University of Guelph</h5>
                <h6>Computing in Computer Science</h6>
                <div className="company">
                  <i className="fa fa-map-marker fa-fw"></i> Guelph, ON
                </div>
                <div className="single-post-text">
                  <p>- Relevant Coursework: System Modeling and Simulation, Database Management, Software Engineering, NLP, and Computer Vision.</p>
                  <p>- Key Projects: Using NLP to Identify Foundational Skills, Mobile App (GPT API, Flutter), Financial Portfolio (Java GUI), Discussion Board (Java App), Rental Car System (C), DUART Project (EASY68K), and Robotics Team Project (ROS).</p>
                </div>
              </div>

              <div className="resume-item">
                <div className="date">Graduated</div>
                <h5>Fanshawe College</h5>
                <h6>Web Development and Internet Applications</h6>
                <div className="company">
                  <i className="fa fa-map-marker fa-fw"></i> London, ON
                </div>
                <div className="single-post-text">
                  <p>- Developed proficiency in HTML, CSS, JavaScript, React, Angular, PHP, and SQL.</p>
                  <p>- Worked on multiple team projects, applying agile methodologies for collaboration and iteration.</p>
                  <p>Key Projects: E-commerce Website (Angular), Interactive Dashboard (D3.js + React), Bouncing Ball Game (React Native).</p>
                </div>
              </div>

              <div className="resume-item">
                <div className="date">Graduated</div>
                <h5>University of Toronto School of Continuing Studies</h5>
                <h6>e-Commerce and Online Business Management Certificate</h6>
                <div className="company">
                  <i className="fa fa-map-marker fa-fw"></i> Toronto, ON
                </div>
                <div className="single-post-text">
                  <p>- Developed business plans using Opportunity Analysis, SLEPT Analysis, Marketing Strategies, and Financial Models to create actionable e-commerce solutions.</p>
                </div>
              </div>

              <div className="resume-item">
                <div className="date">Graduated</div>
                <h5>University of Toronto</h5>
                <h6>Applied Mathematics</h6>
                <div className="company">
                  <i className="fa fa-map-marker fa-fw"></i> Canada
                </div>
                <div className="single-post-text">
                  <p>- Relevant Coursework: Probability Theory, Statistical Inference, Regression Analysis, Time Series Analysis, Financial Mathematics, Advanced Calculus, and Linear Algebra.</p>
                  <p>- A+ in Calculus and Linear Algebra for Commerce and Mathematics of Finance for Non-Actuaries.</p>
                  <p>Key Projects: Nutrition Intervention Monitoring Surveys (SAS Macro), and Comparative Analysis of Organic vs. Non-Organic Vegetables (R).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
