import SocialLink from "../components/SocialLink";

const SocialLinksGroup = () => {
    return (
        <div className="flex justify-center">
            <SocialLink width={12} height={12} iconText="instagram"/>
            <SocialLink width={12} height={12} iconText="twitter"/>
            <SocialLink width={12} height={12} iconText="facebook"/>
        </div>
    )
}

export default SocialLinksGroup;