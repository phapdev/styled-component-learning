import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import { StyledSocialIcons } from "./Social.styled"

const SocialIcon = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://www.facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}

export default SocialIcon