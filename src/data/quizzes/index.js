// This index file will manage all quizzes

import dcVsAcQuiz from "./dc-vs-ac";
import basicConceptsQuiz from "./basic-concepts";

// Computer Programming course quizzes
import cpIntroQuiz from "./cp-intro";
import cpProblemDefinitionQuiz from "./cp-problem-definition";
import cpAlgorithmsQuiz from "./cp-algorithms";
import cpProblemSolvingQuiz from "./cp-problem-solving";
import cpFlowchartsQuiz from "./cp-flowcharts";
import cpStructuredQuiz from "./cp-structured";
import cpPseudocodeQuiz from "./cp-pseudocode";
import cpFundamentalsQuiz from "./cp-fundamentals";
import cpIoQuiz from "./cp-io";
import cpControlQuiz from "./cp-control";
import cpFunctionsQuiz from "./cp-functions";

// I will add new quizzes here as I create them
export const quizzes = {
  "dc-vs-ac": dcVsAcQuiz,
  "basic-concepts": basicConceptsQuiz,
  "cp-intro": cpIntroQuiz,
  "cp-problem-definition": cpProblemDefinitionQuiz,
  "cp-algorithms": cpAlgorithmsQuiz,
  "cp-problem-solving": cpProblemSolvingQuiz,
  "cp-flowcharts": cpFlowchartsQuiz,
  "cp-structured": cpStructuredQuiz,
  "cp-pseudocode": cpPseudocodeQuiz,
  "cp-fundamentals": cpFundamentalsQuiz,
  "cp-io": cpIoQuiz,
  "cp-control": cpControlQuiz,
  "cp-functions": cpFunctionsQuiz,
};
export default quizzes;