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

// Data Structures course quizzes
import dsDynamicLinkedStructures from "./ds-dynamic-linked-structures";
import dsCompilerDrivers from "./ds-compiler-drivers";
import dsStaticLinking from "./ds-static-linking";
import dsSymbolResolution from "./ds-symbol-resolution";
import dsObjectFiles from "./ds-object-files";
import dsLoading from "./ds-loading";
import dsDynamicLinking from "./ds-dynamic-linking";
import dsSharedLibraries from "./ds-shared-libraries";
import dsPIC from "./ds-pic";
import dsObjectTools from "./ds-object-tools";
import dsSets from "./ds-sets";
import dsInformationTechnologies from "./ds-information-technologies";
import dsStacks from "./ds-stacks";

// Internet Fundamentals quizzes
import internetIntroQuiz from "./internet-intro-quiz";
import internetWebBasicsQuiz from "./internet-web-basics-quiz";
import internetProtocolsQuiz from "./internet-protocols-quiz";
import internetSecurityQuiz from "./internet-security-quiz";

// Web Fundamentals quizzes
import webInterfaceDesignQuiz from "./web-interface-design-quiz";
import htmlLayoutQuiz from "./html-layout-quiz";
import cssIntroQuiz from "./css-intro-quiz";

// Discrete Mathematics and Logic quizzes
import booleanAlgebraQuiz from "./boolean-algebra-quiz";
import propositionalLogicQuiz from "./propositional-logic-quiz";
import setTheoryQuiz from "./set-theory-quiz";
import relationsPosetsQuiz from "./relations-posets-quiz";
import proofTechniquesQuiz from "./proof-techniques-quiz";
import combinatoricsQuiz from "./combinatorics-quiz";
import graphTheoryQuiz from "./graph-theory-quiz";

// Foundation Mathematics quizzes
import foundationMathCh1Quiz from "./foundation-math-ch1-quiz";
import foundationMathCh2Quiz from "./foundation-math-ch2-quiz";
import foundationMathCh31Quiz from "./foundation-math-ch3-1-quiz";
import foundationMathCh32Quiz from "./foundation-math-ch3-2-quiz";
import foundationMathCh4Quiz from "./foundation-math-ch4-quiz";
import foundationMathCh51Quiz from "./foundation-math-ch5-1-quiz";
import foundationMathCh52Quiz from "./foundation-math-ch5-2-quiz";
import foundationMathCh61Quiz from "./foundation-math-ch6-1-quiz";
import foundationMathCh62Quiz from "./foundation-math-ch6-2-quiz";

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
  // Data Structures
  "ds-dynamic-linked-structures": dsDynamicLinkedStructures,
  "ds-compiler-drivers": dsCompilerDrivers,
  "ds-static-linking": dsStaticLinking,
  "ds-symbol-resolution": dsSymbolResolution,
  "ds-object-files": dsObjectFiles,
  "ds-loading": dsLoading,
  "ds-dynamic-linking": dsDynamicLinking,
  "ds-shared-libraries": dsSharedLibraries,
  "ds-pic": dsPIC,
  "ds-object-tools": dsObjectTools,
  "ds-sets": dsSets,
  "ds-information-technologies": dsInformationTechnologies,
  "ds-stacks": dsStacks,
  // Internet Fundamentals
  "internet-intro-quiz": internetIntroQuiz,
  "internet-web-basics-quiz": internetWebBasicsQuiz,
  "internet-protocols-quiz": internetProtocolsQuiz,
  "internet-security-quiz": internetSecurityQuiz,
  // Web Fundamentals
  "web-interface-design-quiz": webInterfaceDesignQuiz,
  "html-layout-quiz": htmlLayoutQuiz,
  "css-intro-quiz": cssIntroQuiz,
  // Discrete Mathematics and Logic
  "boolean-algebra-quiz": booleanAlgebraQuiz,
  "propositional-logic-quiz": propositionalLogicQuiz,
  "set-theory-quiz": setTheoryQuiz,
  "relations-posets-quiz": relationsPosetsQuiz,
  "proof-techniques-quiz": proofTechniquesQuiz,
  "combinatorics-quiz": combinatoricsQuiz,
  "graph-theory-quiz": graphTheoryQuiz,
  // Foundation Mathematics
  "foundation-math-ch1-quiz": foundationMathCh1Quiz,
  "foundation-math-ch2-quiz": foundationMathCh2Quiz,
  "foundation-math-ch3-1-quiz": foundationMathCh31Quiz,
  "foundation-math-ch3-2-quiz": foundationMathCh32Quiz,
  "foundation-math-ch4-quiz": foundationMathCh4Quiz,
  "foundation-math-ch5-1-quiz": foundationMathCh51Quiz,
  "foundation-math-ch5-2-quiz": foundationMathCh52Quiz,
  "foundation-math-ch6-1-quiz": foundationMathCh61Quiz,
  "foundation-math-ch6-2-quiz": foundationMathCh62Quiz,
};
export default quizzes;
