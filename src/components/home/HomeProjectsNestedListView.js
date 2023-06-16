import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HomeProjectListing from "./HomeProjectListing";

const HomeProjectsNestedListView = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {data.nested ? (
        <div>
          <Container className="row my-2">
            <Container className="col-4">
              <p>{data.name}</p>
            </Container>
            <Container className="col-4">
              <Button className="mx-2" onClick={() => setShow(!show)}>
                {show ? <FaChevronUp /> : <FaChevronDown />}
              </Button>
            </Container>
            <Container className="col-4">{data.date}</Container>
          </Container>

          {show ? (
            <div>
              {data.nested.map((nest_data) => (
                <HomeProjectListing data={nest_data} />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <Container className="row my-2">
          <HomeProjectListing data={data} />
        </Container>
      )}
    </div>
  );
};

export default HomeProjectsNestedListView;
