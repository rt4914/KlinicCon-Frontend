import Paragraph from "../components/Paragraph";
import DoctorSlider from "../containers/DoctorSlider";
import HeaderText from "../components/HeaderText";
import image1 from "../assets/temp/img_01.webp";
import image2 from "../assets/temp/img_02.webp";
import image3 from "../assets/temp/img_03.webp";
import image4 from "../assets/temp/img_04.webp";
import image5 from "../assets/temp/img_05.webp";

const TopDoctorsSection = () => {
  const teamMembers = [
    {
      name: "Jubayer Al Hasan",
      role: "Marketing Expert",
      imageUrl: image1,
      rating: 4,
    },
    {
      name: "Jannatul Ferdaus",
      role: "Broker",
      imageUrl: image2,
      rating: 5,
    },
    {
      name: "Chris Matial",
      role: "Broker",
      imageUrl: image3,
      rating: 3,
    },
    {
      name: "Mark Filo",
      role: "CEO & Founder",
      imageUrl: image4,
      rating: 5,
    },
    {
      name: "Professor Dr D. Filo",
      role: "CEO & Founder",
      imageUrl: image5,
      rating: 4,
    },
  ];
  return (
    <>
      <HeaderText text="Our Doctors" wavyText="Doctors" size="h2" textColor="black" />
      <Paragraph className="py-4">Lorem is placeholder text commonly used graphic</Paragraph>
      <DoctorSlider teamMembers={teamMembers} />
    </>
  );
};

export default TopDoctorsSection;
