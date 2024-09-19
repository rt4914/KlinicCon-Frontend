import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

// Story: Default Header (H2, Black, Center-aligned)
export const DefaultHeader = () => (
  <Header
    text="Unlock Homy's advantages"
    size="h2"
    textColor="black"
    textAlign="text-center"
  />
);

// Story: H1 Header (White, Left-aligned)
export const H1WhiteLeftAligned = () => (
  <Header
    text="Exclusive Monthly Deal for you."
    size="h1"
    textColor="black"
    textAlign="text-left"
  />
);

// Story: H3 Header (Black, Right-aligned, Multiple Highlighted Words)
export const H3RightAlignedMultipleHighlights = () => (
  <Header
    text="Any Inquiry? Feel free to contact Us."
    size="h3"
    textColor="black"
    textAlign="text-right"
  />
);

// Story: Custom Combination
export const CustomHeader = () => (
  <Header
    text="Amazing Deals Await You!"
    size="h2"
    textColor="black"
    textAlign="text-center"
  />
);
