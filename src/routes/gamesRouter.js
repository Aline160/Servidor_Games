const express = require("express");
const router = express.Router();
const controller = require ("../controller/gamesController");

router.get ("/",controller.getAll);
router.get ("/games",controller.getAll);
router.get("/:id",controller.getByID);
router.post ("/",controller.postGames);
router.delete("/",controller.deleteGames);
router.put("/:id",controller.putGames);
router.patch("/:id/liked",controller.patchGames);

module.exports= router;