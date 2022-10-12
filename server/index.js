import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import photographerRoutes from "./routes/photographers.js";
import signinRoutes from "./routes/auth.js";

const app = express();
app.use(cors());

// Middleware to match the requests Content Type Header and the type
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/photographers", photographerRoutes);
app.use("/auth", signinRoutes);

// Connect to database
const URL =
  "mongodb+srv://snaptester02:C9po8wNAeMIiz3v1@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
