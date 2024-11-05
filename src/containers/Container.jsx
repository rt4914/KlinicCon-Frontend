import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};

export default Container;
