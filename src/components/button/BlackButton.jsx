import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlackButton = ({ text }) => (
  <Link
    className="bg-black text-white text-xl font-semibold py-4 px-10 rounded-lg hover:bg-orange-500 transition-colors duration-300"
    to={"/"}
  >
    {text}
  </Link>
);

BlackButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlackButton;
