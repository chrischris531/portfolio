import { Button } from "react-bootstrap";

const HeaderLink = ({ href, icon, text }) => {
  return (
    <Button
      className="my-2 row w-100"
      variant="light"
      href={href}
      target="_blank"
    >
      {icon}
      {text}
    </Button>
  );
};

export default HeaderLink;
