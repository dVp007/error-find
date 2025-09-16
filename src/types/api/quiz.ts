export interface IQuiz {
  name: string;
  heading: string;
  activities: IActivity[];
}

export interface IActivity {
  activity_name: string;
  order: number;
  questions: IActivityOneTypeQuestions[] | IActivityTwoTypeQuestions[];
}

export interface IActivityOneTypeQuestions {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: [];
  feedback: string;
}

export interface IActivityTwoTypeQuestions {
  round_title: string;
  order: number;
  questions: IActivityOneTypeQuestions[];
}
