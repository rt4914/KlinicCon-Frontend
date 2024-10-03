import {Input, Variant} from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    name: {
      control: "text",
    },
    type: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    variant: {
      control: "select,"
    }
  }
}

export const Default = {
  args: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter name",
    required: false,
    variant: Variant.DEFAULT
  }
}

export const Secondary = {
  args: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter name",
    required: false,
    variant: Variant.SECONDARY
  }
}

export const Small = {
  args: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter name",
    required: false,
    variant: Variant.SMALL
  }
}
