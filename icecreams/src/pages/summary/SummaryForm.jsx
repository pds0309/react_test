import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

import { useState } from "react";

const SummaryForm = ({ setPhase }) => {
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);

  const handleConfirmCheckBoxChange = (event) => {
    setConfirmButtonDisabled(!event.target.checked);
  };

  const popOver = (
    <Popover>
      <Popover.Body>실제로는 안준다</Popover.Body>
    </Popover>
  );

  const checkBoxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popOver}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setPhase("completed");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="id-confirm-checkbox">
        <Form.Check
          type="checkbox"
          checked={!confirmButtonDisabled}
          onChange={(event) => {
            handleConfirmCheckBoxChange(event);
          }}
          label={checkBoxLabel}
        />
      </Form.Group>
      <Button type="submit" variant="primary" disabled={confirmButtonDisabled}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
