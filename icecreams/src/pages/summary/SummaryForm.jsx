import { Button, Form } from "react-bootstrap";

import { useState } from "react";

const SummaryForm = () => {
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);

  const handleConfirmCheckBoxChange = (event) => {
    setConfirmButtonDisabled(!event.target.checked);
  };

  const checkBoxLabel = (
    <span>
      I agree to
      <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
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
