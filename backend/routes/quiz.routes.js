const express = require("express");
const quiz = require("../controllers/quiz.controller");
const router = express.Router();
  
router.get("/quiz-category", async (req, res) => {
  try {
    const data = await quiz.quizCategory();
    res.status(200).send({
      data: data,
      msg: "succes",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/quiz-question", async (req, res) => {
  try {
    const data = await quiz.quizQuestions();
    res.status(200).send({
      data: data,
      msg: "succes",
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/user-answer", async (req, res) => {
  try {
    const data = await quiz.userAnswers();
    res.status(200).send({
      data: data,
      msg: "succes",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
