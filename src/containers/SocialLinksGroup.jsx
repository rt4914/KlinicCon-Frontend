import SocialLink from "../components/SocialLink";

const socialLinksData = [
  {
    icon: "fa-brands fa-square-instagram",
    href: "#",
    text: "Instagram"
  },
  {
    icon: "fa-brands fa-square-twitter",
    href: "#",
    text: "Twitter"
  },
  {
    icon: "fa-brands fa-square-facebook",
    href: "#",
    text: "Facebook"
  }
]


const SocialLinksGroup = () => {
  const dataItems= socialLinksData.map((scLink, idx) => {
    return (
       <SocialLink icon={scLink.icon} href={scLink.href} text={scLink.text} key={idx}/>
    )
  })
  return (
    <div className="flex justify-center gap-2">
      {dataItems}
    </div>
  );
};

export default SocialLinksGroup;
