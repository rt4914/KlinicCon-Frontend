import PropTypes from "prop-types";
import Wavy from "./Wavy";

const HeaderText = ({ text, wavyText, size, textColor, textAlign }) => {
  let sizeClass;

  switch (size) {
    case "h1":
      sizeClass = "max-[620px]:text-4xl text-6xl";
      break;
    case "h2":
      sizeClass = "text-5xl";
      break;
    case "h3":
      sizeClass = "text-4xl";
      break;
    default:
      sizeClass = "text-3xl";
  }

  const headerClass = `${sizeClass} ${textColor === "white" ? "text-white" : "text-black"} ${textAlign} font-bold relative ${textAlign === "text-left" ? "inline-flex" : "flex"} flex-col`;

  const splitText = text.split(wavyText);

  return (
    <div className={headerClass}>
      <span>
        <span className="leading-3">{splitText[0]}</span>
        <span className="leading-3 relative inline-block">
          {wavyText}
          <Wavy textAlign={textAlign} size={size} />
        </span>
        <span className="leading-3">{splitText[1]}</span>
      </span>
    </div>
  );
};

HeaderText.propTypes = {
  text: PropTypes.string.isRequired,
  wavyText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["h1", "h2", "h3"]),
  textColor: PropTypes.oneOf(["white", "black"]),
  textAlign: PropTypes.oneOf(["text-left", "text-center", "text-right"]),
};

HeaderText.defaultProps = {
  wavyText: "",
  size: "h2",
  textColor: "black",
  textAlign: "text-center",
};

export default HeaderText;
