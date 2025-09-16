import useSWR from "swr";
import type { IQuiz } from "../../types/api/quiz";
import fetcher from "./fetcher";

export const useQuiz = () => {
  const { data, error, mutate } = useSWR<IQuiz>(
    `/interview.mock.data/payload.json`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  // store quiz data in session storage
  if (data) {
    sessionStorage.setItem("quiz", JSON.stringify(data));
  }

  return {
    quiz: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
};
