import type { Meta, StoryObj } from "@storybook/react-vite";

import { Activity } from "./activity";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Activity",
  component: Activity,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    activityName: "Activity Name",
    activityQuestion: "Q1",
    questionStimulus: "this is question stimulus",
    onAnswer: () => {},
  },
} satisfies Meta<typeof Activity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    activityName: "Activity Name",
    activityQuestion: "Q1",
    questionStimulus: "this is question stimulus",
    onAnswer: () => {},
  },
};
