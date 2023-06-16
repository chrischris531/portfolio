import { useState } from "react";
import { Button } from "react-bootstrap";

const CVButton = () => {
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    setSuccess(true);
  };

  return (
    <Button
      variant={success ? "success" : "outline-primary"}
      onClick={() => handleClick()}
    >
      Download CV
    </Button>
  );
};

export default CVButton;
