const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Game Power",
    version: "1.0.0",
    Descrição: "Que tal controlarmos nossos jogos e as fases que já conseguimos passar?"

  })
})


module.exports = router
