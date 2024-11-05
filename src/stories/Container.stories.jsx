import Container from "../containers/Container";

export default {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    children: { control: false },
  },
};

// Default Container
export const Default = (args) => <Container {...args}>Default Content</Container>;

Default.args = {
  className: "",
};

// Container with Custom Padding
export const CustomPadding = (args) => <Container {...args}>Content with Custom Padding</Container>;

CustomPadding.args = {
  className: "p-8",
};

// Container with Background Color
export const WithBackgroundColor = (args) => <Container {...args}>Content with Background</Container>;

WithBackgroundColor.args = {
  className: "bg-gray-200",
};

// Container with Centered Text
export const CenteredText = (args) => <Container {...args}>Centered Text Content</Container>;

CenteredText.args = {
  className: "text-center",
};

// Container with Margin Adjustment
export const WithMarginAdjustment = (args) => <Container {...args}>Content with Margin Adjustment</Container>;

WithMarginAdjustment.args = {
  className: "my-10",
};
