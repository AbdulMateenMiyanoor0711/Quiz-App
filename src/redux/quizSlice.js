import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allQuestions: [],
  questions: [],
  currentIndex: 0,
  answers: [],
  isStarted: false,
  category: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state, action) => {
      const quizdata = action.payload;
      state.questions = quizdata;
      state.currentIndex = 0;
      state.answers = [];
      state.isStarted = true;
    },
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },

    selectAnswer: (state, action) => {
      const { index, answer } = action.payload;
      state.answers[index] = answer;
    },

    resetQuiz: (state) => {
      state.questions = [];
      state.answers = [];
      state.currentIndex = 0;
      state.isStarted = false;
    },
  },
});

export const {
  startQuiz,
  nextQuestion,
  prevQuestion,
  selectAnswer,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
