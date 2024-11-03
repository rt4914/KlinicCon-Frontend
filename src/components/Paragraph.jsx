import PropTypes from "prop-types";

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`text-2xl leading-relaxed text-gray-500 ${className} font-normal`}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  className: "",
};

export default Paragraph;
