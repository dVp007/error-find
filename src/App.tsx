import { Box, Button, Stack, Typography } from "@mui/material";
import "./App.css";
import { useQuiz } from "./services/api/quizApi";
import { BoxHeader } from "./components/common/box-header";

function App() {
  const { quiz } = useQuiz();
  return (
    <Stack>
      <Box sx={{ borderRadius: 0 }}>
        <BoxHeader
          textAlign={"center"}
          title="CAE"
          subtitle={quiz?.name ?? ""}
          orientation="vertical"
        />
      </Box>
      {quiz?.activities.map((activity, index) => (
        <Button
          component="a"
          href={`/activity/${index}`}
          key={index}
          variant="text"
          fullWidth
          sx={{
            height: "50px",
            borderRadius: 0,
            border: `1px solid`,
            borderColor: "secondary.main",
            py: 1,
          }}
        >
          <Typography variant="body1">{activity.activity_name}</Typography>
        </Button>
      ))}
    </Stack>
  );
}

export default App;
