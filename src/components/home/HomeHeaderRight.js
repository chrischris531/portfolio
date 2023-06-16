import { Container, Image } from "react-bootstrap";

const HomeHeaderRight = () => {
  return (
    <Container className="col-3" style={{ marginLeft: 0 }}>
      <Image rounded src={require("../../images/avatar.jpg")} width="100%" />
    </Container>
  );
};

export default HomeHeaderRight;
