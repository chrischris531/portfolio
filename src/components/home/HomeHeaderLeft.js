import { Container } from "react-bootstrap";
import HomeHeaderContact from "./HomeHeaderContact";
// import CVButton from "../../buttons/CVButton";

const HomeHeaderLeft = () => {
  return (
    <Container className="col-6" style={{ marginRight: 0 }}>
      <h1>Chris Myers</h1>
      <Container className="col-8">
        <p>
          Penultimate-year Electronic and Information Engineering at Imperial
          College London.
        </p>
        <p>
          Currently interning for six months as a Quantitative Intern at PrismFP
          Analytics.
        </p>
        <p>
          I wrote all the code for this website from scratch:
          <br />
          See the code in{" "}
          <a
            href="https://github.com/chrischris531/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            this repo
          </a>
          !
        </p>
        <HomeHeaderContact />
        {/* <CVButton /> */}
      </Container>
    </Container>
  );
};

export default HomeHeaderLeft;
