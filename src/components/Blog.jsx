import React from "react";
import "../styles/blog.css";

const Blog = () => {
  const projects = [
    {
      img: "b7.jpg",
      title: "Rapport Magazine",
      date: "August 2025",
      link: "https://www.schulich.uwo.ca/rapport/2025/index.html",
    },
    {
      img: "b8.jpg",
      title: "Schulich Main Website",
      date: "February 2025",
      link: "https://www.schulich.uwo.ca/index.html",
    },
    {
      img: "b9.jpg",
      title: "TechSoluOne",
      date: "December 2024",
      link: "https://superjingke.github.io/TechSoluOne/",
    },
    {
      img: "b1.jpg",
      title: "TechInnovate Demo",
      date: "March 2023",
      link: "https://www.canva.com/design/DAFecmTzlYI/9cRUvD7pQ7Xhm7kDwW1uQg/watch?utm_content=DAFecmTzlYI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf435392584",
    },
    {
      img: "b2.jpg",
      title: "RecordXpress Dynamic Map",
      date: "January 5, 2022",
      link: "https://www.recordxpress.ca/locations",
    },
    {
      img: "b5.jpg",
      title: "Taste The Globe",
      date: "January 5, 2020",
      link: "https://superjingke.github.io/tastetheglobe/",
    },
  ];

  return (
    <section className="blog-area section-padding" id="demo">
      <div className="section-title">
        <h3>Latest Projects</h3>
        <span></span>
      </div>

      <div className="container">
        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="single-blog">
                <div className="blog-img">
                  <img className="img-fluid" src={`/static/picture/${p.img}`} alt={p.title} />
                </div>
                <div className="blog-details">
                  <div className="blog-info">
                    <div className="writter">{p.title}</div>
                    <i className="icon-calendar"></i>
                    <span>{p.date}</span>
                  </div>
                  {p.subtitle && <h4 className="mb-2">{p.subtitle}</h4>}
                  <a className="read-more mt-2" target="_blank" rel="noopener noreferrer" href={p.link}>
                    Read More.
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
