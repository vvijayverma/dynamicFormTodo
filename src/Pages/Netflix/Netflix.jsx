import React from "react";
import netflixLogo from "../../Images/netflixLogo2.avif";
import pic1 from "../../Images/pic1.avif";
import pic2 from "../../Images/pic2.jpg";
import pic3 from "../../Images/pic3.webp";
import pic4 from "../../Images/pic4.webp";
import pic5 from "../../Images/pic5.jpeg";
import pic6 from "../../Images/pic6.jpg";

import { FaPlus } from "react-icons/fa6";

const Netflix = () => {
  return (
    <>
      <div className="netflix-container">
        <nav className="netflix-nav">
          <img src={netflixLogo} className="netflix-logo" alt="Netflix"></img>
          <div className="button">
            <button className="english">English</button>
            <button className="signin">Sign In</button>
          </div>
        </nav>
        <div className="netflix-box"></div>
        <div className="netflix-hero">
          <span className="netflix-hero-text">
            <h1 className="hero-heading">
              Unlimited movies, TV <br />{" "}
              {/* <h4 className="hero-heading-br">shows and more</h4> */}
            </h1>
          </span>
          <span className="netflix-hero-text">
            Starts at ₹149. Cancel anytime.
          </span>
          <span className="netflix-hero-text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>

          <div className="get-search">
            <input
              type="text"
              placeholder="Email Address"
              className="get-search-input"
            />
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
      <section className="netflix-section">
        <div className="section-child">
          <div className="section-content">
            <h2 className="section-heading">Enjoy on your Tv</h2>
            <p className="section-para">
              Watch on smart TVs, PlyaStaion,Xbox,Chromecast,Apple TV,Blu-ray
              players and more
            </p>
          </div>
          <img src={pic1} alt="img" className="section-img" />
        </div>
      </section>
      <section className="netflix-section">
        <div className="section-child">
          <img src={pic2} alt="img" className="section-img" />
          <div className="section-content">
            <h2 className="section-heading">Enjoy on your Tv</h2>
            <p className="section-para">
              Watch on smart TVs, PlyaStaion,Xbox,Chromecast,Apple TV,Blu-ray
              players and more
            </p>
          </div>
        </div>
      </section>
      <section className="netflix-section">
        <div className="section-child">
          <div className="section-content">
            <h2 className="section-heading">Enjoy on your Tv</h2>
            <p className="section-para">
              Watch on smart TVs, PlyaStaion,Xbox,Chromecast,Apple TV,Blu-ray
              players and more
            </p>
          </div>
          <img src={pic3} alt="img" className="section-img" />
        </div>
      </section>
      <section className="netflix-section">
        <div className="section-child">
          <img src={pic4} alt="img" className="section-img" />
          <div className="section-content">
            <h2 className="section-heading">Enjoy on your Tv</h2>
            <p className="section-para">
              Watch on smart TVs, PlyaStaion,Xbox,Chromecast,Apple TV,Blu-ray
              players and more
            </p>
          </div>
        </div>
      </section>

      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          <p className="ques-para">What is Netflix</p>
          <FaPlus className="ques-icon" />
        </div>
        <div className="questions">
          <p className="ques-para">How much does Netflix cost?</p>
          <FaPlus className="ques-icon" />
        </div>
        <div className="questions">
          <p className="ques-para">Where can I watch?</p>
          <FaPlus className="ques-icon" />
        </div>
        <div className="questions">
          <p className="ques-para">How do I cancel?</p>
          <FaPlus className="ques-icon" />
        </div>
        <div className="questions">
          <p className="ques-para">What can I watch on Netflix?</p>
          <FaPlus className="ques-icon" />
        </div>
        <div className="questions">
          <p className="ques-para">Is Netflix good for kids?</p>
          <FaPlus className="ques-icon" />
        </div>

      
      </div>

      <footer className="netflix">
        <div className="duplicate">
      <span className="netflix-hero-text">
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="get-search">
          <input
            type="text"
            placeholder="Email Address"
            className="get-search-input"
          />
          <button className="get-started-btn">Get Started</button>
        </div>
        </div>
        <span className="qus">Questions? Call 000-800-919-1694</span>
        <div className="netflix-footer">
        <div className="footer-item">
          <a href="#">FAQ</a>
          <a>Investor Relations</a>
          <a>Privacy</a>
          <a>Speed Test</a>
        </div>
        <div className="footer-item">
          <a>FAQ</a>
          <a>Jobs</a>
          <a>Account</a>
          <a>Legal Notices</a>
        </div>
        <div className="footer-item">
          <a>FAQ</a>
          <a>Ways to Watch</a>
          <a>Cookie Preferences</a>
          <a>Only on Netflix</a>
        </div>
        <div className="footer-item">
          <a>FAQ</a>
          <a>Terms of Use</a>
          <a>Contact Us</a>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Netflix;
