import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DefaultButton = ({ text, icon: Icon }) => (
  <Link
    className="bg-orange-500 text-white py-4 px-8 rounded-lg hover:bg-red-500 flex items-center justify-between font-semibold w-[13rem] text-xl transition-colors duration-300"
    to={"/"}
  >
    {text}
    {Icon && <Icon />}
  </Link>
);

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default DefaultButton;
