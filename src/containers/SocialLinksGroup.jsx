import SocialLink from "../components/SocialLink";

const socialLinksData = [
  {
    icon: "fa-brands fa-square-instagram",
    href: "#",
    text: "Instagram",
  },
  {
    icon: "fa-brands fa-square-twitter",
    href: "#",
    text: "Twitter",
  },
  {
    icon: "fa-brands fa-square-facebook",
    href: "#",
    text: "Facebook",
  },
];

const SocialLinksGroup = () => {
  const dataItems = socialLinksData.map((socialLink) => {
    return (
      <SocialLink
        icon={socialLink.icon}
        href={socialLink.href}
        text={socialLink.text}
        key={socialLink.text}
      />
    );
  });
  return <div className="flex justify-center gap-2">{dataItems}</div>;
};

export default SocialLinksGroup;
