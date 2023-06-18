import { Container } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import HeaderLink from "../../buttons/HeaderLink";

const HomeHeaderContact = () => {
  return (
    <Container className="col">
      <HeaderLink
        href="mailto: chrismyers611@outlook.com"
        icon={<FaEnvelope className="mx-2" />}
        text="chrismyers611@outlook.com"
      />
      <HeaderLink
        href="https://github.com/chrischris531?tab=repositories"
        icon={<FaGithub className="mx-2" />}
        text="GitHub"
      />
      <HeaderLink
        href="https://www.linkedin.com/in/christopher-myers-467938193/"
        icon={<FaLinkedin className="mx-2" />}
        text="LinkedIn"
      />
    </Container>
  );
};

export default HomeHeaderContact;
