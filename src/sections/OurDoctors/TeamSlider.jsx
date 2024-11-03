import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/img_01.webp";
import image2 from "../../assets/img_02.webp";
import image3 from "../../assets/img_03.webp";
import image4 from "../../assets/img_04.webp";
import image5 from "../../assets/img_05.webp";

const teamMembers = [
  {
    name: "Jubayer Al Hasan",
    role: "Marketing Expert",
    imageUrl: image1,
  },
  {
    name: "Jannatul Ferdaus",
    role: "Broker",
    imageUrl: image2,
  },
  {
    name: "Chris Matial",
    role: "Broker",
    imageUrl: image3,
  },
  {
    name: "Mark Filo",
    role: "CEO & Founder",
    imageUrl: image4,
  },
  {
    name: "Professor Dr D. Filo",
    role: "CEO & Founder",
    imageUrl: image5,
  },
];

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamSlider;
