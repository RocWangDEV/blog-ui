export interface IDifficulty {
  difficulty: string;
  count: number;
}
export interface IDetail {
  numAcceptedQuestions: IDifficulty[];
  numFailedQuestions: IDifficulty[];
  numUntouchedQuestions: IDifficulty[];
}
export interface IRecent {
  submissionId: number;
  submitTime: number;
  question: {
    title: string;
    translatedTitle: string;
    titleSlug: string;
    questionFrontendId: string;
  };
}
