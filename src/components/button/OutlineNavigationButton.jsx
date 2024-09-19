import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OutlineButton = ({ text, icon: Icon }) => (
  <Link
    className="border-2 border-orange-500 text-orange-500 py-1 px-4  rounded-lg flex items-center justify-between text-xl font-semibold w-[8rem] gap-1 hover:bg-black hover:border-black hover:text-white transition-colors duration-300 group"
    to={"/"}
  >
    {Icon && <Icon />}
    {text}
  </Link>
);

OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default OutlineButton;
