import type { IActivityTwoTypeQuestions } from "../types/api/quiz";
import { useState } from "react";
import { Activity } from "./common/activity";
import { BoxHeader } from "./common/box-header";
import { Results, type RoundResults } from "./common/results";

export const ActivityTypeTwo = ({
  activityName,
  questions,
}: {
  activityName: string;
  questions: IActivityTwoTypeQuestions[];
}) => {
  const [isRoundPage, setIsRoundPage] = useState(true);
  const [roundIndex, setRoundIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<RoundResults>(
    questions.map((question) => ({
      name: question.round_title,
      results: Array(question.questions.length).fill(false),
    })),
  );
  if (roundIndex === questions.length) {
    return (
      <Results activityName={activityName} roundResults={correctAnswers} />
    );
  }
  if (isRoundPage) {
    setTimeout(() => {
      setIsRoundPage(false);
    }, 1000);
    return (
      <BoxHeader
        title={activityName}
        subtitle={questions[roundIndex].round_title}
        textAlign="start"
        orientation="horizontal"
      />
    );
  }
  return (
    <Activity
      activityName={activityName}
      activityQuestion={`Q${questionIndex + 1}`}
      questionStimulus={questions[roundIndex].questions[questionIndex].stimulus}
      onAnswer={function (value: boolean): void {
        setQuestionIndex(questionIndex + 1);
        if (questionIndex + 1 === questions[roundIndex].questions.length) {
          setRoundIndex(roundIndex + 1);
          setQuestionIndex(0);
          setIsRoundPage(true);
        }
        if (
          value === questions[roundIndex].questions[questionIndex].is_correct
        ) {
          correctAnswers[roundIndex]["name"] =
            questions[roundIndex].round_title;
          correctAnswers[roundIndex]["results"][questionIndex] = true;
        } else {
          correctAnswers[roundIndex]["name"] =
            questions[roundIndex].round_title;
          correctAnswers[roundIndex]["results"][questionIndex] = false;
        }
        setCorrectAnswers(correctAnswers);
      }}
    ></Activity>
  );
};
