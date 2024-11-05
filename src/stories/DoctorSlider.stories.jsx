import "./assets/styles/slick.css";
import image1 from "../assets/temp/img_01.webp";
import image2 from "../assets/temp/img_02.webp";
import image3 from "../assets/temp/img_03.webp";
import image4 from "../assets/temp/img_04.webp";
import image5 from "../assets/temp/img_05.webp";
import DoctorSlider from "../containers/DoctorSlider";

export default {
  title: "Components/DoctorSlider",
  component: DoctorSlider,
  tags: ["autodocs"],
  argTypes: {
    member1Name: { control: "text", name: "Member 1 Name" },
    member1Role: { control: "text", name: "Member 1 Role" },
    member1Rating: { control: "number", name: "Member 1 Rating" },
    member2Name: { control: "text", name: "Member 2 Name" },
    member2Role: { control: "text", name: "Member 2 Role" },
    member2Rating: { control: "number", name: "Member 2 Rating" },
    member3Name: { control: "text", name: "Member 3 Name" },
    member3Role: { control: "text", name: "Member 3 Role" },
    member3Rating: { control: "number", name: "Member 3 Rating" },
    member4Name: { control: "text", name: "Member 4 Name" },
    member4Role: { control: "text", name: "Member 4 Role" },
    member4Rating: { control: "number", name: "Member 4 Rating" },
    member5Name: { control: "text", name: "Member 5 Name" },
    member5Role: { control: "text", name: "Member 5 Role" },
    member5Rating: { control: "number", name: "Member 5 Rating" },
  },
};

const Template = (args) => {
  const teamMembers = [
    {
      name: args.member1Name,
      role: args.member1Role,
      imageUrl: image1,
      rating: args.member1Rating,
    },
    {
      name: args.member2Name,
      role: args.member2Role,
      imageUrl: image2,
      rating: args.member2Rating,
    },
    {
      name: args.member3Name,
      role: args.member3Role,
      imageUrl: image3,
      rating: args.member3Rating,
    },
    {
      name: args.member4Name,
      role: args.member4Role,
      imageUrl: image4,
      rating: args.member4Rating,
    },
    {
      name: args.member5Name,
      role: args.member5Role,
      imageUrl: image5,
      rating: args.member5Rating,
    },
  ];

  return <DoctorSlider teamMembers={teamMembers} />;
};

export const Default = Template.bind({});
Default.args = {
  member1Name: "Jubayer Al Hasan",
  member1Role: "Marketing Expert",
  member1Rating: 4,
  member2Name: "Jannatul Ferdaus",
  member2Role: "Broker",
  member2Rating: 5,
  member3Name: "Chris Matial",
  member3Role: "Broker",
  member3Rating: 3,
  member4Name: "Mark Filo",
  member4Role: "CEO & Founder",
  member4Rating: 5,
  member5Name: "Professor Dr D. Filo",
  member5Role: "CEO & Founder",
  member5Rating: 4,
};
