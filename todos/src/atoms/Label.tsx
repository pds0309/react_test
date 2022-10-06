import { Form } from "react-bootstrap";
import styled from "@emotion/styled";

export interface LabelProps extends React.ComponentProps<"label"> {
  color: "blue" | "red";
}

const Label = ({ color, ...props }: LabelProps): JSX.Element => {
  return <StyledLabel color={color}>{props.children}</StyledLabel>;
};

const defaultProps: LabelProps = {
  color: "blue",
};
Label.defaultProps = defaultProps;

const StyledLabel = styled(Form.Label)`
  color: ${({ color }) => color};
`;

export default Label;
