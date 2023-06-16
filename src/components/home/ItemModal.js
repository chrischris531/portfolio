import { Modal, Button, Carousel, Container } from "react-bootstrap";

const ItemModal = ({ show, setShow, data }) => {
  let image_count = 0;

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5">
        <Carousel>
          {data.images.map((image) => {
            image_count++;
            return (
              <Carousel.Item key={image_count}>
                {/* <Card.Img variant="top" src={image} /> */}
                <img className="d-block w-100" src={image} alt="Second slide" />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Container className="pt-3 text-center">
          <p>{data.description}</p>
          {data.grade ? <p>Grade: {data.grade}</p> : null}
          <p>{data.date}</p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
