import { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import ItemModal from "./ItemModal";

const HomeProjectCard = ({ project, hover, setHover, count }) => {
  let image_count = 0;
  const [show, setShow] = useState(false);

  return (
    <Card
      className={"col-2 m-3 " + (hover === count ? "shadow" : "")}
      style={{ opacity: (hover === count) | (hover === 0) ? 1 : 0.8 }}
    >
      <ItemModal show={show} setShow={setShow} data={project} />
      <a
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setHover(count)}
        onMouseLeave={() => setHover(0)}
        onClick={() => setShow(true)}
      >
        <Carousel>
          {project.images.map((image) => {
            image_count++;
            return (
              <Carousel.Item key={image_count}>
                <Card.Img variant="top" src={image} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          {/* <Card.Text>{project.description}</Card.Text> */}
          {project.grade ? <Card.Text>Grade: {project.grade}</Card.Text> : null}
          {project.company ? <Card.Text>{project.company}</Card.Text> : null}
          <Card.Text className="small">{project.date}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default HomeProjectCard;
