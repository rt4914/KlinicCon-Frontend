import Button from "../components/Button";

// Default export that defines the title of the component in Storybook and its component
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "black", "outline", "circular"],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
    fullWidth: { control: "boolean" },
    to: { control: false },
  },
};

// Template to create different stories using args
const Template = (args) => <Button {...args} />;

// Default Button
export const Default = Template.bind({});
Default.args = {
  text: "Add Listing",
  variant: "default",
  size: "medium",
  children: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
};
Default.argTypes = {
  children: {
    table: { disable: true },
  },
};

// Black Button
export const Black = Template.bind({});
Black.args = {
  text: "Sign In",
  variant: "black",
  size: "medium",
};
Black.argTypes = {
  children: {
    table: { disable: true },
  },
};
// Outline Button
export const Outline = Template.bind({});
Outline.args = {
  text: "Learn More",
  variant: "outline",
  size: "large",
  children: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      xmlSpace="preserve"
      className="w-[36px] h-[36px]"
    >
      <path
        d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z"
        className="fill-orange-500 transition-colors duration-300 group-hover:fill-white"
      />
    </svg>
  ),
};
Outline.argTypes = {
  children: {
    table: { disable: true },
  },
};

// Circular Button
export const Circular = Template.bind({});
Circular.args = {
  text: "",
  variant: "circular",
  children: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
};
Circular.parameters = {
  controls: {
    exclude: ["text", "fullWidth"],
  },
};

Circular.argTypes = {
  children: {
    table: { disable: true },
  },
};
// Full-Width Button
export const FullWidth = Template.bind({});
FullWidth.args = {
  text: "Get Started",
  variant: "default",
  size: "large",
  fullWidth: true,
  children: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
};
FullWidth.argTypes = {
  children: {
    table: { disable: true },
  },
  variant: {
    control: "select",
    options: ["default", "black", "outline"],
  },
};
