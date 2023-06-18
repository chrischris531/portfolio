import { Container, Image } from "react-bootstrap";

const HomeHeaderRight = () => {
  return (
    <Container className="col-3" style={{ marginLeft: 0 }}>
      <Image rounded src={require("../../images/avatar.jpg")} width="100%" />
      <p>
        I built these smart glasses.
        <br />
        See more{" "}
        <a
          href="https://sheriff4000.wixsite.com/scarglass"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        !
      </p>
    </Container>
  );
};

export default HomeHeaderRight;
