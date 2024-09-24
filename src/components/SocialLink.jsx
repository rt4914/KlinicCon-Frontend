import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SocialLink = ({width, height, iconText}) => {
    return (
        <div>
            <Link  to={"#"}>
                    <div className={`m-2 border border-neutral-900 rounded-full flex justify-center items-center hover:bg-neutral-900 hover:text-white w-${width} h-${height}`}>
                        <i className={`text-2xl fa-brands fa-square-${iconText}`}></i>
                    </div>
                </Link>
        </div>
    );
}

SocialLink.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    iconText: PropTypes.string
}

SocialLink.defaultProps = {
    width: 12,
    height: 12,
    iconText: "instagram"
}

export default SocialLink;