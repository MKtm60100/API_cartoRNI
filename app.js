const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const PORT = 4200;
const indexRouter = require("./routes/indexController");
const usersRouter = require("./routes/userController");
const uniteRouter = require("./routes/uniteController");
const planningRouter = require("./routes/planningController");
const optionRouter = require("./routes/optionController");
const creneauRouter = require("./routes/creneauController");
const regionRouter = require("./routes/regionController");
const serviceRouter = require("./routes/serviceController");
const criseRouter = require("./routes/criseController");
const client = require("./models/database");
const { Planning } = require("./mocks/planning");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

// Init Swagger option
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RNI Management API",
      version: "1.0.0",
      servers: ["localhost:4200"],
    },
  },
  apis: ["app.js"],
};

// Implement Swagger API Docs
const swaggerDocs = swaggerJSDoc(swaggerOptions);
console.log(swaggerDocs);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
/**
 * @swagger
 * /planning:
 *   get:
 *    description: GET all planning
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /planning:
 *  post:
 *    description: POST new commentaire into PlanningRouter
 *    parameters:
 *      -commentaire: The comment
 */
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// * routes API
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/planning", planningRouter);
app.use("/creneau", creneauRouter);
app.use("/option", optionRouter);
app.use("/unite", uniteRouter);
app.use("/region", regionRouter);
app.use("/crise", criseRouter);
app.use("/service", serviceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => console.log("Server started: " + PORT));

module.exports = app;
