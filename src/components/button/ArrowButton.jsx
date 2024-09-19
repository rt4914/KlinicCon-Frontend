import PropTypes from "prop-types";

const CircularButton = ({ icon: Icon }) => (
  <button className="bg-black text-white p-4 rounded-full hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
    {Icon && <Icon />}
  </button>
);

CircularButton.propTypes = {
  icon: PropTypes.elementType,
};

export default CircularButton;
