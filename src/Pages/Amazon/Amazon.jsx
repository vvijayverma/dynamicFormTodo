import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { IoMenuOutline } from "react-icons/io5";
import box1 from "../../Images/box1_image.jpg";
import box2 from "../../Images/box2_image.jpg";
import box3 from "../../Images/box3_image.jpg";
import box4 from "../../Images/box4_image.jpg";
import box5 from "../../Images/box5_image.jpg";
import box6 from "../../Images/box6_image.jpg";
import box7 from "../../Images/box7_image.jpg";
import box8 from "../../Images/box8_image.jpg";

const Amazon = () => {
  return (
    <div className="amazon-container">
      <div className="amazon-navbar">
        <div className="nav-logo border">
          <Link to="/">
          <div className="amazon-logo"></div>
          </Link>
        </div>
        <div className="nav-address border">
          <p className="add-first">Deliver to</p>
          <div className="add-icon">
            <CiLocationOn className="location-icon" />
            <p className="add-sec">India</p>
          </div>
        </div>
        <div className="nav-search">
          <select className="search-select">
            <option>All</option>
          </select>
          <input
            type="text"
            placeholder="search amazon"
            className="search-input"
          />
          {/* <IoCameraOutline className="camera-icon"/> */}
          <CiSearch className="search-icon" />
        </div>

        <div className="nav-signin">
          <p>
            <span>Hello, sign in</span>
          </p>
          <p className="nav-second">Account & Lists</p>
        </div>

        <div className="nav-order">
          <p>
            <span>Returns</span>
          </p>
          <p className="nav-third">& Orders</p>
        </div>

        <div className="nav-cart">
          <TiShoppingCart className="cart-icon" />
          <p>cart</p>
        </div>
      </div>

      <div className="panel">
        <div className="panel-start">
          <div className="home">
            <IoMenuOutline />
            <p>All</p>
          </div>
          <ul className="panel-item">
            <li className="item-list">Today's Deals</li>
            <li className="item-list">Customer Service</li>
            <li className="item-list">Registry</li>
            <li className="item-list">Gift Card</li>
            <li className="item-list">Sell</li>
          </ul>
        </div>
        <p className="panel-para">Shop deals in Electronic</p>
      </div>

      <div className="hero-section">
        <div className="hero-msg">
          <p>
            You are on amazon.com. You can also shop on amazon india for
            millions of products
            <a href="" className="hero-link">
              Click here to go to amazon.in
            </a>
          </p>
        </div>
      </div>

      <div className="shop-section">
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box1})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box2})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box3})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box4})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box5})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box6})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box7})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h1>Health and Personal Care</h1>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${box8})` }}
            ></div>
            <p>See More</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-panel1">Back to top</div>
        <div className="footer-panel2">
          <div className="panel-box">
            <h3>Get to Know Us</h3>
            <ul className="panel-list">
              <li className="panel-list-item">Careers</li>
              <li className="panel-list-item">Blog</li>
              <li className="panel-list-item">About Amazon</li>
              <li className="panel-list-item">Investor Relations</li>
              <li className="panel-list-item">Amazon Devices</li>
              <li className="panel-list-item">Amazon Science</li>
            </ul>
          </div>
          <div className="panel-box">
            <h3>Make Money with Us</h3>
            <ul className="panel-list">
              <li className="panel-list-item">Sell products on Amazon</li>
              <li className="panel-list-item">Sell on Amazon Business</li>
              <li className="panel-list-item">Sell apps on Amazon</li>
              <li className="panel-list-item">Become an Affiliate</li>
              <li className="panel-list-item">Advertise Your Products</li>
              <li className="panel-list-item">Self-Publish with Us</li>
              <li className="panel-list-item">Host an Amazon Hub</li>
              <li className="panel-list-item">See More Make Money with Us</li>
            </ul>
          </div>
          <div className="panel-box">
            <h3>Amazon Payment Products</h3>
            <ul className="panel-list">
              <li className="panel-list-item">Amazon Business Card</li>
              <li className="panel-list-item">Shop with Points</li>
              <li className="panel-list-item">Reload Your Balance</li>
              <li className="panel-list-item">Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="panel-box">
            <h3>Let Us Help You</h3>
            <ul className="panel-list">
            <li className="panel-list-item">Amazon and COVID-19</li>
              <li className="panel-list-item">Your Account</li>
              <li className="panel-list-item">Your Orders</li>
              <li className="panel-list-item">Shipping Rates & Policies</li>
              <li className="panel-list-item">Returns & Replacements</li>
              <li className="panel-list-item">Returns & Replacements</li>
              <li className="panel-list-item">Manage Your Content and Devices</li>
              <li className="panel-list-item">Amazon Assistant</li>
              <li className="panel-list-item">Help</li>
            </ul>
          </div>
        </div>
        <div className="footer-panel3">
          <div className="logo"></div>
        </div>
        <div className="footer-panel4">
          <ul className="panel4-list">
            <li className="panel4-item">Conditions of Use</li>
            <li className="panel4-item">Privacy Notice</li>
            <li className="panel4-item">Consumer Health Data Privacy Disclosure</li>
            <li className="panel4-item">Your Ads Privacy Choices</li>
          </ul>
          <p className="panel-4-para">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </div>
  );
};

export default Amazon;
