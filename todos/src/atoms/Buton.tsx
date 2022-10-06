import { Button } from "react-bootstrap";
import styled from "@emotion/styled";

export interface ButtonProps extends React.ComponentProps<"button"> {
  colorType?: "blue" | "white";
  type: "button" | "submit";
  onClick?: () => void;
}
const Buton = ({ children, colorType, type, ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} colorType={colorType} {...props}>
      {children}
    </StyledButton>
  );
};

const defaultProps: ButtonProps = {
  colorType: "blue",
  type: "button",
};

Button.defaultProps = defaultProps;

const StyledButton = styled(Button)`
  color: ${({ colorType }) => colorType};
  background-color: ${({ colorType }) =>
    colorType === "blue" ? "white" : "black"};
  border: 1px solid ${({ colorType }) => colorType};
  @media (hover: hover) {
    :hover {
      border: 1.5px solid;
    }
  }
`;

export default Buton;
