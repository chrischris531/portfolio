import Nav from "react-bootstrap/Nav";

const CustomNavbarIndividualLink = ({ href, text }) => {
  return <Nav.Link href={href}>{text}</Nav.Link>;
};

export default CustomNavbarIndividualLink;
