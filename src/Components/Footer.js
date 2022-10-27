import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        DishPoll Footer
      </p>
      <a href="https://www.crio.do/learn/portfolio/shravanjoshihydi/" className="link" target="_blank" rel="noreferrer">
        crio.do
      </a>
      <a href="https://github.com/shravanjoshihydi" className="link" target="_blank" rel="noreferrer">
        gitHub
      </a>
      <a href="https://www.linkedin.com/in/shravan-joshi-a2913817b/" className="link" target="_blank" rel="noreferrer">
        linkedIn
      </a>
    </div>
  );
};

export default Footer;
