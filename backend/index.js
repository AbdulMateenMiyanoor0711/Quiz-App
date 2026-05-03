const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const quiz = require("./routes/quiz.routes");
const auth = require("./routes/auth.routes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(quiz);
app.use(auth);
app.get("/quizlist", (req, res) => {
  console.log("hii");
  res.send("Quiz list endpoint");
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
