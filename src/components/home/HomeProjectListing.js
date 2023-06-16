import { Container } from "react-bootstrap";

const HomeProjectListing = ({ data }) => {
  return (
    <Container className="row my-2" key={data.name}>
      <Container className="col-4">
        <p>{data.name}</p>
      </Container>
      <Container className="col-4 d-flex align-items-center justify-content-center">
        <p>{data.value}</p>
      </Container>
      <Container className="col-4 d-flex align-items-center justify-content-center">
        <p>{data.date}</p>
      </Container>
    </Container>
  );
};

export default HomeProjectListing;
