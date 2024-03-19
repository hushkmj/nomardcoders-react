import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Btn = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(223, 228, 234, 0.5);
  border: 1px solid rgba(255, 255, 255, 1);
  svg {
    width: 32px;
    height: 32px;
    fill: rgba(72, 219, 251, 1);
  }
`;

function Play() {
  return (
    <Wrapper>
      <Btn>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
        </svg>
      </Btn>
    </Wrapper>
  );
}

export default Play;
