const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const petsRouter = require("./routers/petsRouter.js");

require("./database/database.js");
// app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// Routes go here
app.use("", petsRouter);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
