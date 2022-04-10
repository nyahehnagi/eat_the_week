import React from "react"

const Footer = () =>
  <>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Untitled</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
      <link rel="stylesheet" href="./styles.css" />
    </head>

    <body>
      <div class="footer-basic">
        <footer className="page-footer" style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
        <div class="social"><a href="https://www.instagram.com/eattheweek/"><i class="icon ion-social-instagram"></i></a><a href="https://twitter.com/eattheweek"><i class="icon ion-social-twitter"></i></a><a href="https://www.facebook.com/eattheweekuk"><i class="icon ion-social-facebook"></i></a></div>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="/">Home</a></li>
          <li class="list-inline-item"><a href="/recipe">My Recipes</a></li>
          <li class="list-inline-item"><a href="/recipe">Weekly Planner</a></li>
        </ul>
        <p class="copyright">Eat The Week © 2022</p>
        </footer>
      </div>
    </body>
  </>
  
export default Footer