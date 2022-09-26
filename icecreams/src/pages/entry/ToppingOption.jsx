import { Col, Form, Row } from "react-bootstrap";

const ToppingOption = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (event) => {
    updateItemCount(name, event.target.checked ? 1 : 0);
  };
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ textAlign: "center" }}
      key={name}
    >
      <img style={{ width: "75%" }} src={`${imagePath}`} alt={name}></img>
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Check
          label={name}
          type="checkbox"
          column
          xs="6"
          style={{ textAlign: "right" }}
          onChange={handleChange}
        />
      </Form.Group>
    </Col>
  );
};

export default ToppingOption;
