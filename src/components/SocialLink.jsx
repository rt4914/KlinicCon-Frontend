import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SocialLink = ({ icon, href, text }) => {
  return (
    <div>
      <Link to={href}>
        <div
          className={`m-2 border border-neutral-900 rounded-full 
          flex justify-center items-center hover:bg-neutral-900 hover:text-white w-12 h-12`}
        >
          <i className={`text-2xl ${icon}`}></i>
        </div>
      </Link>
    </div>
  );
};

SocialLink.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
};

export default SocialLink;
