import SocialLink from "../components/SocialLink";

const SocialLinksGroup = () => {
  return (
    <div className="flex justify-center">
      <SocialLink
        icon="fa-brands fa-square-instagram"
        href={"#"}
        text={"Instagram"}
      />
      <SocialLink
        icon="fa-brands fa-square-twitter"
        href={"#"}
        text={"Twitter"}
      />
      <SocialLink
        icon="fa-brands fa-square-facebook"
        href={"#"}
        text={"Facebook"}
      />
    </div>
  );
};

export default SocialLinksGroup;
