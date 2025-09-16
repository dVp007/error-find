import { Typography } from "@mui/material";

export const QuestionText = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="body1"
      color="primary"
      paddingX={1}
      paddingY={2}
      dangerouslySetInnerHTML={{
        __html: `${text.replace(/\*(.*?)\*/g, "<strong>$1</strong>")}`,
      }}
    />
  );
};
