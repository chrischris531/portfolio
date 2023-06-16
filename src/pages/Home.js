import { Container } from "react-bootstrap";
import HomeFooter from "../components/home/HomeFooter";
import HomeHeader from "../components/home/HomeHeader";
import HomeProjectsContainer from "../components/home/HomeProjectsContainer";

const Home = () => {
  return (
    <Container className="my-5">
      <HomeHeader />
      <HomeProjectsContainer />
      <HomeFooter />
    </Container>
  );
};

export default Home;
