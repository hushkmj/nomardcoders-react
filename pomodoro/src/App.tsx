import styled from "styled-components";
import Header from "./Layouts/Header";
import Layout from "./Layouts/Layout";
import Footer from "./Layouts/Footer";

const Wrapper = styled.div`
  height: 680px;
  min-width: 400px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: rgba(236, 240, 241, 1);
  border-radius: 25px;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Layout />
      <Footer />
    </Wrapper>
  );
}

export default App;
