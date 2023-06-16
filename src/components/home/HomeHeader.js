import { Container } from "react-bootstrap";
import HomeHeaderLeft from "./HomeHeaderLeft";
import HomeHeaderRight from "./HomeHeaderRight";

const HomeHeader = () => {
  return (
    <Container className="row align-items-center p-5">
      <HomeHeaderLeft />
      <HomeHeaderRight />
    </Container>
  );
};

export default HomeHeader;
