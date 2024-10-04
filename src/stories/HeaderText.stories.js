import HeaderText from "../components/HeaderText/HeaderText";

export default {
  title: "Components/Header",
  component: HeaderText,
  tags: ["autodocs"],
  argTypes: {
    textColor: {
      control: "select",
      options: ["white", "black"],
    },
    size: {
      control: "select",
      options: ["h1", "h2", "h3"],
    },
    textAlign: {
      control: "select",
      options: ["text-left", "text-center", "text-right"],
    },
    text: {
      control: "text",
    },
  },
};

// Default story: `Primary`
export const Primary = {
  args: {
    text: "My home is in family",
    wavyText: "in family",
    size: "h1",
    textColor: "black",
    textAlign: "text-center",
  },
};

// Additional stories for different variations
export const BlackText = {
  args: {
    text: "Black Text Example",
    wavyText: "Example",
    size: "h2",
    textColor: "black",
    textAlign: "text-left",
  },
};

export const LargeText = {
  args: {
    text: "Large HeaderText header example",
    wavyText: "HeaderText",
    size: "h1",
    textColor: "black",
    textAlign: "text-right",
  },
};

export const SmallText = {
  args: {
    text: "Small HeaderText header",
    wavyText: "HeaderText header",
    size: "h3",
    textColor: "black",
    textAlign: "text-center",
  },
};
