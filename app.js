const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
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
 * tags:
        - planning
          summary: CRUD planning
          operationId: GET planning
 * /planning:
 *    get:
 *     description: By passing in the appropriate ID_region, you can search for available planning
 *     parameters:
 *      - name: ID_region
 *        schema:
 *          type: string
 *          required: false
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *        application/json:
 *        schema:
 *          type: object
 *          properties:
 *            id_user: 
 *              type: integer
 *            code_unite: 
 *              type: integer
 *            id_region:
 *              type: integer
 *          exemple:
 *            id_user: 468478
 *            code_unite: 7
 *            id_region: 4          
 */

/**
 * @swagger
 * /planning{commentaire}:
 *  post:
 *    parameters:
 *    - description: POST new commentaire into Planning
 *      name: commentaire
 *      schema:
 *        type: string
 *        required: true
 *        responses:
 *        201:
 *          description: Created success
 */

/**
 * @swagger
 * /crise:
 *   get:
 *    description: GET all crise
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /creneau:
 *   get:
 *    description: GET all creneau
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /creneau:
 *   get:
 *     parameters:
 *      - name: ID
 *      schema:
 *      type: string
 *      required: true
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /option:
 *   get:
 *    description: GET all option
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /option{}:
 *    post:
 *      parameters:
 *        - description: POST new option into ref_options
 *          name: ID_option
 *          schema:
 *            type: string
 *            required: true
 *            name: lib_option
 *          schema:
 *            type: string
 *            required: true
 *            responses:
 *              201:
 *                description: Created success
 */

/**
 * @swagger
 * /option:
 *  post:
 *    parameters:
 *    - description: POST new option INTO ref_options
 *      name: ID_option
 *      schema:
 *        type: string
 *        required: true
 *    - name: lib_option
 *      schema:
 *        type: string
 *        required: true
 *        responses:
 *        201:
 *          description: Created success
 */

/**
 * @swagger
 * /region:
 *   get:
 *    description: GET all regions
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /service:
 *   get:
 *    description: GET all service
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /unite:
 *   get:
 *    description: GET all unite
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /user:
 *   get:
 *    description: GET all user
 *    responses:
 *      200:
 *        description: Success
 */

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// * routes API
app.use("/", indexRouter);
app.use("/user", usersRouter);
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

module.exports = app;
