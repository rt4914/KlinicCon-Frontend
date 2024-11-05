import StarRating from "../components/StarRating";
import "../styles/slick.css";

export default {
  title: "Components/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: {
        type: "number",
        min: 0,
        max: 5,
      },
    },
  },
};

// Default Star Rating
export const Default = (args) => <StarRating {...args} />;
Default.args = {
  rating: 3, // default rating
};

// 1-Star Rating
export const OneStar = (args) => <StarRating {...args} />;
OneStar.args = {
  rating: 1,
};

// 3-Star Rating
export const ThreeStars = (args) => <StarRating {...args} />;
ThreeStars.args = {
  rating: 3,
};

// 5-Star Rating
export const FiveStars = (args) => <StarRating {...args} />;
FiveStars.args = {
  rating: 5,
};
