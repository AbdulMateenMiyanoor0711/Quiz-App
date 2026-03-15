const express = require("express");
const auth = require("../controllers/auth.controller");
const router = express.Router();

router.post("/add-user", async (req, res) => {
  try {
    let data = await auth.addUsers(req.body);
    res.status(200).send({
      msg: "succes",
    });
  } catch (error) {
    res.status(500).send({
      msg: error.message,
    });
  }
});

router.post("/verify-user", async (req, res) => {
  try {
    let data = await auth.verifyUser(req.body);
    res.status(200).send({
      msg: "login succesfully",
    });
  } catch (error) {
    console.log("check here",error);
    res.status(500).send({
      msg: error.message,
    });
  }
});

module.exports = router;
