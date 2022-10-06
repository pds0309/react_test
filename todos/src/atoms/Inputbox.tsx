import { Form } from "react-bootstrap";

export type InputProps = React.ComponentProps<typeof Form.Control>;
const Inputbox = ({ ...props }: InputProps): JSX.Element => {
  return <Form.Control {...props} />;
};

export default Inputbox;
