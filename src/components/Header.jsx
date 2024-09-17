import PropTypes from "prop-types";

const Header = ({ text, highlightWords, size, textColor, textAlign }) => {
  const renderText = () => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const isHighlighted = highlightWords.includes(word);

      const highlightClass = isHighlighted
        ? "underline decoration-wavy decoration-orange-500 font-bold"
        : "font-bold";

      return (
        <span key={index} className={highlightClass}>
          {word}{" "}
        </span>
      );
    });
  };

  const headerClass = `${size === "h1" ? "text-6xl" : size === "h2" ? "text-3xl" : "text-2xl"} text-${textColor} ${textAlign} font-bold`;

  return <div className={headerClass}>{renderText()}</div>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  highlightWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.oneOf(["h1", "h2", "h3"]),
  textColor: PropTypes.oneOf(["white", "black"]),
  textAlign: PropTypes.oneOf(["text-left", "text-center", "text-right"]),
};

Header.defaultProps = {
  size: "h2",
  textColor: "black",
  textAlign: "text-center",
};

export default Header;
