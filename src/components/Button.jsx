import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Button = ({
  text,
  variant,
  size,
  to,
  fullWidth,
  children,
  onClick,
  ...props
}) => {
  const buttonClass = classNames(
    "inline-flex gap-2 items-center justify-center font-semibold transition-colors duration-300 rounded-lg",
    {
      "bg-orange-500 text-white hover:bg-red-500 justify-between":
        variant === "default",
      "bg-black text-white hover:bg-orange-500": variant === "black",
      "border-2 border-orange-500 !text-xl text-orange-500 hover:bg-black hover:border-black hover:text-white group":
        variant === "outline",
      "bg-black text-white hover:bg-orange-500 !rounded-full !gap-0 !p-4 w-[60px] h-[60px]":
        variant === "circular",
      "w-full !justify-center": fullWidth,
      "py-4 px-10 text-xl": size === "large",
      "py-2 px-6 text-lg": size === "medium",
      "py-1 px-4 text-sm": size === "small",
    }
  );

  return to ? (
    <Link to={to} className={buttonClass} {...props}>
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "black", "outline", "circular"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  to: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "default",
  size: "medium",
  fullWidth: false,
};

export default Button;
