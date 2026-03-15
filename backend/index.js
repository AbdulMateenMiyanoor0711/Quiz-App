const express = require("express");
const app = express();
const port = 8080;
const quiz = require("./../backend/routes/quiz.routes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(quiz);
app.get("/quizlist", (req, res) => {
  console.log("hii");
  res.send("Quiz list endpoint");
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
