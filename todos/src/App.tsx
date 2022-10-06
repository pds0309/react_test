import { Container } from "react-bootstrap";
import Main from "./pages/Main";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Container className="App">
        <Main />
      </Container>
    </RecoilRoot>
  );
}

export default App;
