import { Container, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const HomeHeaderContact = () => {
  return (
    <Container className="col">
      <Button
        className="my-2 row w-100"
        variant="light"
        href="mailto: chrismyers611@outlook.com"
      >
        <FaEnvelope className="mx-2" />
        chrismyers611@outlook.com
      </Button>
      <Button
        href="https://github.com/chrischris531?tab=repositories"
        className="my-2 row w-100"
        variant="light"
      >
        <FaGithub className="mx-2" />
        GitHub
      </Button>
      <Button
        href="https://www.linkedin.com/in/christopher-myers-467938193/"
        className="my-2 row w-100"
        variant="light"
        target="_blank"
      >
        <FaLinkedin className="mx-2" />
        LinkedIn
      </Button>
    </Container>
  );
};

export default HomeHeaderContact;
