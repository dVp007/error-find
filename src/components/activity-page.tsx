import type {
  IActivityOneTypeQuestions,
  IActivityTwoTypeQuestions,
  IQuiz,
} from "../types/api/quiz";
import { ActivityTypeOne } from "./activity-type-one";
import { ActivityTypeTwo } from "./activity-type-two";

export default function ActivityPage({ index }: { index: number }) {
  const activity = (JSON.parse(sessionStorage.getItem("quiz") || "{}") as IQuiz)
    .activities[index];
  return index === 0 ? (
    <ActivityTypeOne
      activityName={activity.activity_name}
      questions={activity.questions as IActivityOneTypeQuestions[]}
    />
  ) : (
    <ActivityTypeTwo
      activityName={activity.activity_name}
      questions={activity.questions as IActivityTwoTypeQuestions[]}
    />
  );
}
