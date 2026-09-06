const express = require("express");
const app = express();
const logger = require("morgan");
const petsCtrl = require("./controllers/petsCtrl.js");
const cors = require("cors");

require("./database/database.js");
// app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// Routes go here
app.get("/pets", petsCtrl.index);
app.post("/pets", petsCtrl.create);
app.get("/pets/:id", petsCtrl.show);
app.put("/pets/:id", petsCtrl.update);
app.delete("/pets/:id", petsCtrl.deletePet);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
