import { Box, Button, Stack, Typography } from "@mui/material";
import { BoxHeader } from "./box-header";
import { QuestionText } from "./question-text";

export const Activity = ({
  activityName,
  activityQuestion,
  questionStimulus,
  onAnswer,
}: {
  activityName: string;
  activityQuestion: string;
  questionStimulus: string;
  onAnswer: (value: boolean) => void;
}) => {
  return (
    <BoxHeader
      textAlign="start"
      title={activityName}
      subtitle={activityQuestion}
      orientation="horizontal"
    >
      <Box
        sx={{
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "secondary.main",
          textAlign: "center",
          backgroundColor: "primary.light",
        }}
      >
        <QuestionText text={questionStimulus} />
      </Box>
      <Stack
        flexDirection={"row"}
        gap={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingY={4}
        paddingX={2}
      >
        <Button
          variant="text"
          onClick={() => onAnswer(true)}
          fullWidth
          sx={{ cursor: "pointer" }}
        >
          <Typography variant="h4">Correct</Typography>
        </Button>
        <Button
          variant="text"
          onClick={() => onAnswer(false)}
          fullWidth
          sx={{ cursor: "pointer" }}
        >
          <Typography variant="h4">Incorrect</Typography>
        </Button>
      </Stack>
    </BoxHeader>
  );
};
