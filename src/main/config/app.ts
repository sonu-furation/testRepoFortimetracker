import express, { type Express } from "express";
import setupRoutes from "@main/config/routes";
import cors from "cors";
import cookieParser from "cookie-parser";
const session = require("express-session");

export default (): Express => {
  const app = express();
  app.use(
    session({
      secret: "1234", // Replace with your own secret key
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Set 'secure' to true for HTTPS environments
    })
  );
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  setupRoutes(app);
  
  return app;
};
