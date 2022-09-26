import { Col, FormControl } from "react-bootstrap";

import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState } from "react";

const ScoopOption = ({ name, imagePath, updateItemCount }) => {
  const [isValidInput, setIsValidInput] = useState(true);
  const handleChange = async (event) => {
    const currentInputValue = event.target.value;
    const valid =
      0 <= currentInputValue &&
      currentInputValue <= 10 &&
      parseFloat(currentInputValue) === parseInt(currentInputValue);
    setIsValidInput(valid);
    if (valid) {
      updateItemCount(name, currentInputValue);
    } else {
      updateItemCount(name, 0);
    }
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
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <FormControl
            type="number"
            defaultValue={0}
            onChange={handleChange}
            isInvalid={!isValidInput}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOption;
