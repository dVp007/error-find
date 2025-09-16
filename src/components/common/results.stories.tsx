import type { Meta, StoryObj } from "@storybook/react-vite";

import { Results } from "./results";

const meta = {
  title: "Results",
  component: Results,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Results>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActivityOneResult: Story = {
  args: {
    activityName: "Activity One",
    results: [true, false, true, false],
  },
};

export const ActivityTwoResult: Story = {
  args: {
    activityName: "Activity two",
    roundResults: [
      { name: "Round One", results: [true, false, true, false] },
      { name: "Round two", results: [true, false, true, false] },
    ],
  },
};
