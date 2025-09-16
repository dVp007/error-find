import type { Preview } from "@storybook/react-vite";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customTheme } from "../src/theme";

const theme = createTheme(customTheme);

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable since we're using MUI themes
    },
  },
};

export default preview;
