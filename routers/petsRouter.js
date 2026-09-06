const express = require("express");
const router = express.Router();
const petsCtrl = require("../controllers/petsCtrl.js");

router.get("/pets", petsCtrl.index);
router.post("/pets", petsCtrl.create);
router.get("/pets/:id", petsCtrl.show);
router.put("/pets/:id", petsCtrl.update);
router.delete("/pets/:id", petsCtrl.deletePet);

module.exports = router;
