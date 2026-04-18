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
};
export default quizzes;
