import PropTypes from "prop-types";
import Wavy from "../components/Header/Component";

const Header = ({ text, size, textColor, textAlign }) => {
  const renderText = () => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const isLastWord = index === words.length - 1;
      const wordLengthFactor = word.length * 35;

      return (
        <span
          key={index}
          className={`relative ${isLastWord ? "inline-block" : ""}`}
        >
          {word} {isLastWord && <Wavy wordLengthFactor={wordLengthFactor} />}
        </span>
      );
    });
  };

  let sizeClass;
  switch (size) {
    case "h1":
      sizeClass = "text-6xl";
      break;
    case "h2":
      sizeClass = "text-3xl";
      break;
    case "h3":
      sizeClass = "text-2xl";
      break;
    default:
      sizeClass = "text-3xl";
  }

  const headerClass = `${sizeClass} ${textColor === "white" ? "text-white" : "text-black"} ${textAlign} font-bold`;

  return <div className={headerClass}>{renderText()}</div>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
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
