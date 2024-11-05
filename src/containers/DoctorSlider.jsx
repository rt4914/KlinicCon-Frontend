import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import StarRating from "../components/StarRating";

const DoctorSlider = ({ teamMembers = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-16 with-background">
      {teamMembers.map((member, index) => (
        <div key={index} className="p-4">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full rounded-2xl h-[400px] object-cover shadow-lg transition-transform duration-700 ease-in-out transform hover:scale-110"
              />
            </div>

            <h3 className="mt-4 text-2xl font-semibold py-2">{member.name}</h3>
            <p className="text-lg text-gray-500">{member.role}</p>
            <StarRating rating={member.rating} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

DoctorSlider.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default DoctorSlider;
