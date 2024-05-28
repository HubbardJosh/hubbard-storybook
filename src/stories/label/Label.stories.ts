import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestLabel1: Story = {
  args: {
    value: "Test Label 1",
  },
};
export const TestLabel2: Story = {
  args: {
    value: "testing",
    color: "blue",
  },
};
export const TestLabel3: Story = {
  args: {
    value: "Test Label 3",
    color: "green",
    fontSize: "24px",
  },
};
