// ---------------------- Import modules ----------------------
import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";

//import controllers
import * as PageController from "./controllers/PageController.js";
import * as AuthController from "./controllers/AuthController.js";
import * as API_UserController from "./controllers/api/UserController.js";

// ---------------------- App configuration ----------------------
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", path.resolve("src", "views"));
app.set("layout", "layouts/main");

app.use(express.static("public"));

// ---------------------- App routes ----------------------

// Voeg de currentPath middleware toe aan alle routes
app.use(PageController.addCurrentPath);
