import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 100px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

function Colon() {
  return (
    <Wrapper>
      <Dot />
      <Dot />
    </Wrapper>
  );
}

export default Colon;
