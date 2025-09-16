import type { Meta, StoryObj } from "@storybook/react-vite";

import { BoxHeader } from "./box-header";

const meta = {
  title: "Box Header",
  component: BoxHeader,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    title: "Box Header",
    subtitle: "Subtitle",
    textAlign: "center",
    orientation: "horizontal",
  },
} satisfies Meta<typeof BoxHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    title: "Box Header",
    subtitle: "Subtitle",
    textAlign: "center",
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    title: "Box Header",
    subtitle: "Subtitle",
    textAlign: "center",
    orientation: "vertical",
  },
};

export const TextStart: Story = {
  args: {
    title: "Box Header",
    subtitle: "Subtitle",
    textAlign: "start",
    orientation: "horizontal",
  },
};
