import { Container, Button } from "react-bootstrap";
import HomeProjectsNestedListView from "./HomeProjectsNestedListView";

const HomeProjectsListView = ({ data }) => {
  return (
    <Container className="col-10">
      <Container className="row border-bottom">
        <Container className="col-4">
          <h5>{data[0][0]}</h5>
        </Container>
        <Container className="col-4">
          <h5>{data[0][1]}</h5>
        </Container>
        <Container className="col-4">
          <h5>{data[0][2]}</h5>
        </Container>
      </Container>
      {data.map((d) => (
        <HomeProjectsNestedListView data={d} key={d.name} />
      ))}
    </Container>
  );
};

export default HomeProjectsListView;
