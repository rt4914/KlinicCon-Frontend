import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.css";

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) =>
      i < rating ? (
        <i key={i} className="fas fa-star text-yellow-400"></i>
      ) : (
        <i key={i} className="far fa-star text-yellow-400"></i>
      )
    );

  return <div className="flex space-x-1 mt-2">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
