import SocialLink from "../components/SocialLink";
import {BrowserRouter} from "react-router-dom";

export default {
  title: "Components/SocialLink",
  component: SocialLink,
  decorators: [
    (Story) => (
        <BrowserRouter>
          <Story/>
        </BrowserRouter>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: {
      control: "text",
    },
    href: {
      control: "text",
    },
    text: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    icon: "fa-brands fa-square-facebook",
    href: "#",
    text: "Facebook",
  },
};

export const Twitter = {
  args: {
    icon: "fa-brands fa-square-twitter",
    href: "#",
    text: "Twitter",
  },
};

export const Instagram = {
  args: {
    icon: "fa-brands fa-square-instagram",
    href: "#",
    text: "Instagram",
  },
};
