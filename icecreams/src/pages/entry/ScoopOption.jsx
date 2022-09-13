import { Col } from "react-bootstrap";

const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ textAlign: "center" }}
      key={name}
    >
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={name}
      ></img>
    </Col>
  );
};

export default ScoopOption;
