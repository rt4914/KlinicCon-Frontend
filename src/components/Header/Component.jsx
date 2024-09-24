import PropTypes from "prop-types";

const Wavy = ({ svgWidth, textAlign }) => {
  const marginClass =
    textAlign === "text-center"
      ? "mx-auto w-11"
      : textAlign === "text-right"
        ? "w-full"
        : "mr-0 w-full";
  const wavyRightClass =
    textAlign === "text-right"
      ? "right-8 !left-auto"
      : textAlign === "text-left"
        ? "!left-5"
        : "";
  return (
    <div className={`relative ${textAlign}  ${marginClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 280 21"
        fill="none"
        className={`absolute bottom-[-18px] left-[-43px] h-[21px] ${wavyRightClass} max-[620px]:w-[120px]`}
        width={svgWidth}
      >
        <path
          d="M2 13.7384C11.3639 15.7551 26.1561 12.0089 35.1947 10.365C46.2182 8.36015 57.2248 6.70129 68.3895 5.11747C70.9668 4.75185 76.2676 3.1647 73.7754 6.09201C70.6781 9.73004 66.376 12.8155 63.773 16.662C61.2975 20.32 66.1818 18.7385 69.8184 18.1613C92.2378 14.6032 114.707 11.3197 137.417 8.71577C139.354 8.49364 157.452 5.1838 160.609 7.14151C161.716 7.82786 154.828 11.7562 154.344 12.0142C152.044 13.2395 149.629 14.698 147.09 15.6875C144.148 16.8339 153.742 14.8006 157.037 14.2631C172.282 11.7769 186.956 8.107 201.828 4.78013C202.663 4.59331 219.212 1.6052 218.92 2.04392C217.806 3.71482 205.056 13.5614 208.148 14.0008C217.557 15.3377 231.132 11.4777 240.024 9.99017C252.621 7.88283 265.172 5.63881 278 4.29286"
          stroke="#FF6625"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

Wavy.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  textAlign: PropTypes.string.isRequired,
};

export default Wavy;
