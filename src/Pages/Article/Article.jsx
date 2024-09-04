import React from "react";
import "./Artice.css";

const Article = () => {
  return (
    <div className="article-container">
      {/* <div className="article-header"> */}
        <div className="article-nav">
          <p>Ameotech</p>
          <ul className="article-nav-list">
            <li className="article-nav-item">Home</li>
            <li className="article-nav-item">About</li>
            <li className="article-nav-item">Services</li>
            <li className="article-nav-item">Button</li>
          </ul>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Article;
