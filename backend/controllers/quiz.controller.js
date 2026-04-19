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

async function quizQuestions(category_id) {
  try {
    const questions = await db.query(
      `SELECT * FROM quiz_app.quiz_category_questions WHERE category_id = ?;`,
      [category_id],
    );
    console.log("Succesfull in getting Quiz Questions", questions);

    const parsed = questions[0].map((q) => ({
      ...q,
      options:
        typeof q.options === "string" ? JSON.parse(q.options) : q.options,
    }));
    return parsed;
  } catch (error) {
    console.log(error);
  }
}

async function userAnswers() {
  try {
    const answers = await db.query(`SELECT * FROM quiz_app.quiz_attempt;`);
    console.log("Succesfull in getting Users Selected Answers", answers);
    return answers[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  quizCategory: quizCategory,
  quizQuestions: quizQuestions,
  userAnswers: userAnswers,
};
