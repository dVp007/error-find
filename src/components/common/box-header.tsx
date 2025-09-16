import { Box, styled, Typography } from "@mui/material";

const StyledBoxHeader = styled(Box)`
  border: ${({ theme: { palette } }) => `1px solid ${palette.secondary.main}`};
  border-bottom: "0px";
  border-radius: "0px";
`;

export const BoxHeader = ({
  title,
  subtitle,
  textAlign = "start",
  orientation = "vertical",
  children,
}: {
  title: string;
  subtitle: string;
  textAlign: "center" | "start";
  orientation: "horizontal" | "vertical";
  children?: React.ReactNode;
}) => {
  return (
    <StyledBoxHeader
      textAlign={textAlign || "start"}
      sx={{
        minWidth: orientation === "horizontal" ? "600px" : "350px",
      }}
    >
      <Typography variant="h4" color="primary" m={5}>
        {title}
      </Typography>
      <Typography variant="h2" color="primary" m={4}>
        {subtitle}
      </Typography>
      {children}
    </StyledBoxHeader>
  );
};
