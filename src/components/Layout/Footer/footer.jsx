import {
  FooterContainer,
  MenuLink,
  SocialLink,
  SocialMenu,
  SocialMenuItem,
  Text,
  Wave1,
  Wave2,
  Wave3,
  Wave4,
  Waves,
} from "./style";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <Waves>
        <Wave1 id="wave1" />
        <Wave2 id="wave2" />
        <Wave3 id="wave3" />
        <Wave4 id="wave4" />
      </Waves>
      <SocialMenu>
        <SocialMenuItem>
          <SocialLink>
            <FaFacebook />
          </SocialLink>
        </SocialMenuItem>
        <SocialMenuItem>
          <SocialLink>
            <FaTwitter />
          </SocialLink>
        </SocialMenuItem>
        <SocialMenuItem>
          <SocialLink>
            <FaLinkedin />
          </SocialLink>
        </SocialMenuItem>
        <SocialMenuItem>
          <SocialLink>
            <FaInstagram />
          </SocialLink>
        </SocialMenuItem>
      </SocialMenu>
      <SocialMenu>
        <SocialMenuItem>
          <MenuLink>Home</MenuLink>
        </SocialMenuItem>
        <SocialMenuItem>
          <MenuLink>About</MenuLink>
        </SocialMenuItem>
        <SocialMenuItem>
          <MenuLink>Services</MenuLink>
        </SocialMenuItem>
        <SocialMenuItem>
          <MenuLink>Team</MenuLink>
        </SocialMenuItem>
        <SocialMenuItem>
          <MenuLink>Contact</MenuLink>
        </SocialMenuItem>
      </SocialMenu>
      <Text> Dai hoc Thuy Loi</Text>
    </FooterContainer>
  );
}

export default Footer;
