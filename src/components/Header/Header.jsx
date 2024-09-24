import PropTypes from "prop-types";
import Wavy from "./Component";

const HeaderText = ({ text, size, textColor, textAlign }) => {
  let sizeClass;
  let svgWidth;

  switch (size) {
    case "h1":
      sizeClass = "max-[620px]:text-4xl text-6xl";
      svgWidth = 200;
      break;
    case "h2":
      sizeClass = "text-3xl";
      svgWidth = 140;
      break;
    case "h3":
      sizeClass = "text-2xl";
      svgWidth = 130;
      break;
    default:
      sizeClass = "text-xl";
      svgWidth = 120;
  }

  const headerClass = `${sizeClass} ${textColor === "white" ? "text-white" : "text-black"} ${textAlign} font-bold relative flex flex-col`;

  return (
    <div className={headerClass}>
      <span>{text}</span>
      <Wavy svgWidth={svgWidth} textAlign={textAlign} />
    </div>
  );
};

HeaderText.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["h1", "h2", "h3"]),
  textColor: PropTypes.oneOf(["white", "black"]),
  textAlign: PropTypes.oneOf(["text-left", "text-center", "text-right"]),
};

HeaderText.defaultProps = {
  size: "h2",
  textColor: "black",
  textAlign: "text-center",
};

export default HeaderText;
