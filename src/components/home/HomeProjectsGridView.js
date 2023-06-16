import { Container } from "react-bootstrap";
import HomeProjectCard from "./HomeProjectCard";

const HomeProjectsGridView = ({ data, hover, setHover }) => {
  let count = 0;

  return (
    <Container>
      <Container className="row d-flex justify-content-center">
        {data.map((project) => {
          if (project.images.length > 0) {
            count++;
            return (
              <HomeProjectCard
                key={project.name}
                project={project}
                hover={hover}
                setHover={setHover}
                count={count}
              />
            );
          } else {
            return null;
          }
        })}
      </Container>
      <Container className="row d-flex justify-content-center">
        {data.map((project) => {
          if (project.images.length === 0) {
            count++;
            return (
              <HomeProjectCard
                key={project.name}
                project={project}
                hover={hover}
                setHover={setHover}
                count={count}
              />
            );
          } else {
            return null;
          }
        })}
      </Container>
    </Container>
  );
};

export default HomeProjectsGridView;
