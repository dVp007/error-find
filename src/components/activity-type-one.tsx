import type { IActivityOneTypeQuestions } from "../types/api/quiz";
import { useState } from "react";
import { Activity } from "./common/activity";
import { Results } from "./common/results";

export const ActivityTypeOne = ({
  activityName,
  questions,
}: {
  activityName: string;
  questions: IActivityOneTypeQuestions[];
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(
    Array(questions.length).fill(false),
  );
  return questionIndex + 1 !== questions.length ? (
    <>
      <Activity
        activityName={activityName}
        activityQuestion={`Q${questionIndex + 1}`}
        questionStimulus={questions[questionIndex].stimulus}
        onAnswer={(value: boolean) => {
          setQuestionIndex(questionIndex + 1);
          correctAnswers[questionIndex] =
            questions[questionIndex].is_correct === value;
          setCorrectAnswers([...correctAnswers]);
        }}
      />
    </>
  ) : (
    <Results activityName={activityName} results={correctAnswers} />
  );
};
