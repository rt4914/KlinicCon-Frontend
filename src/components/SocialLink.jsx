import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SocialLink = ({ icon, href, text }) => {
  return (
    <div>
      <Link to={href} target={"_blank"}>
        <div
          className={`border border-black rounded-full 
          flex justify-center items-center hover:bg-black hover:text-white w-12 h-12`}
        >
          <i className={`text-2xl ${icon}`}></i>
        </div>
      </Link>
    </div>
  );
};

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SocialLink;
