import React from "react";
import "../style.css";

const Footer = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Untitled</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
    />

    <div className="footer-basic">
      <footer
        className="page-footer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="social">
          <a href="https://www.instagram.com/eattheweek/">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="https://twitter.com/eattheweek">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="https://www.facebook.com/eattheweekuk">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/recipe">My Recipes</a>
          </li>
          <li className="list-inline-item">
            <a href="/recipe">Weekly Planner</a>
          </li>
        </ul>
        <p className="copyright">Eat The Week © 2022</p>
      </footer>
    </div>
  </>
);

export default Footer;
