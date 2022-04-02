const createError = require("http-errors");
const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
const logger = require("morgan");
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route setup - Insert routes here
const recipesRouter = require("./routes/recipes");

// Tell app to use the routes
app.use("/recipes", recipesRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("*", (req, res) => {
  let url = path.join(__dirname, '/client/build', 'index.html');
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

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
