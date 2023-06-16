import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomNavbarIndividualLink from "./CustomNavbarIndividualLink";

const CustomNavbarTop = ({ routes }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          {routes.map((route) => (
            <CustomNavbarIndividualLink
              key={route["text"]}
              href={route["path"]}
              text={route["text"]}
            />
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbarTop;
