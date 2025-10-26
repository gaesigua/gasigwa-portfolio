// This index file will manage all quizzes

import dcVsAcQuiz from "./dc-vs-ac";
import basicConceptsQuiz from "./basic-concepts";

// I will add new quizzzes here as I create them
export const quizzes = {
  "dc-vs-ac": dcVsAcQuiz,
  "basic-concepts": basicConceptsQuiz
};
export default quizzes;