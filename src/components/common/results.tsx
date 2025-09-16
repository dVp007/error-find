import { Box, Button, Stack, Typography } from "@mui/material";
import { BoxHeader } from "./box-header";
import { useQuiz } from "../../services/api/quizApi";

export type RoundResults = Array<{ name: string; results: boolean[] }>;
const ResultStack = ({ results }: { results: boolean[] }) => {
  return results.map((result, index) => (
    <Stack
      key={index}
      direction={"row"}
      sx={{
        borderTop: "0.5px solid",
        borderBottom: "0.5px solid",
        borderColor: "secondary.main",
        backgroundColor: "primary.light",
      }}
      paddingY={1}
      paddingX={2}
      justifyContent={"space-between"}
    >
      <Typography
        variant="body1"
        color="primary"
      >{`Q ${index + 1}`}</Typography>
      <Typography variant="h4" color="primary">
        {result ? "Correct" : "Incorrect"}
      </Typography>
    </Stack>
  ));
};

export const Results = ({
  activityName,
  results,
  roundResults,
}: {
  activityName: string;
  results?: boolean[];
  roundResults?: Array<{ name: string; results: boolean[] }>;
}) => {
  const { mutate } = useQuiz();
  return (
    <BoxHeader
      orientation="vertical"
      textAlign="center"
      title={activityName}
      subtitle="Results"
    >
      <Stack direction="column">
        {results && <ResultStack results={results} />}
        {roundResults &&
          roundResults.map((roundResult) => (
            <>
              <Box
                sx={{
                  borderTop: "1px solid",
                  borderBottom: "1px solid",
                  borderColor: "secondary.main",
                  textAlign: "center",
                  backgroundColor: "primary.light",
                }}
                paddingY={1}
                paddingX={2}
              >
                <Typography variant="h4" color="primary">
                  {roundResult.name}
                </Typography>
              </Box>
              <ResultStack results={roundResult.results} />
            </>
          ))}
      </Stack>
      <Button
        component="a"
        href="/"
        onClick={() => {
          mutate();
        }}
        sx={{
          padding: 2,
        }}
      >
        Home
      </Button>
    </BoxHeader>
  );
};
