const db = require("./../db");

async function quizCategory() {
  try {
    const category = await db.query(`SELECT * FROM quiz_app.quiz_category;`);
    console.log("Succesfull in getting categories", category);
    return category[0];
  } catch (error) {
    console.log(error);
  }
}


async function quizQuestions() {
  try {
    const questions = await db.query(`SELECT * FROM quiz_app.quiz_category_questions;`);
    console.log("Succesfull in getting Quiz Questions", questions);
    return questions[0];
  } catch (error) {
    console.log(error);
  } 
}

async function userAnswers() {
  try {
    const answers = await db.query(`SELECT * FROM quiz_app.user_quiz_answer;`);
    console.log("Succesfull in getting Users Selected Answers", answers);
    return answers[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  quizCategory: quizCategory,
  quizQuestions:quizQuestions,
  userAnswers:userAnswers
};
