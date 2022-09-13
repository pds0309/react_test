import { Alert } from "react-bootstrap";

const AlertBanner = ({ message, varient }) => {
  const alertMessage =
    message || "예상치 못한 에러가 발생했어요. 다시 시도해주세요";
  const alertVarient = varient || "danger";
  return <Alert variant={alertVarient}>{alertMessage}</Alert>;
};

export default AlertBanner;
