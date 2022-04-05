if(process.env.NODE_ENV !=='production'){
  require('dotenv').config()
}

const createError = require("http-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const path = require("path");
const logger = require("morgan");
const methodOverride = require("method-override");

const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route setup - Insert routes here
const recipesRouter = require("./routes/recipes");
const usersRouter = require("./routes/users");
const sessionsRouter = require("./routes/sessions");

// Tell app to use the routes
app.use("/recipes", recipesRouter);
app.use("/users", usersRouter);
app.use("/sessions", sessionsRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser());

app.get("*", (req, res) => {
  let url = path.join(__dirname, 'client/build', 'index.html');
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

// app.use(session({
//     key: "user_sid",
//     secret: "SUPER_SECRET",
//     resave: false,
//     saveUninitialized: false
//   })
// );

passport.use(
  'jwt',
  new JWTstrategy(
    {
      secretOrKey: process.env.SESSION_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
