import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

function Header() {
  return (
    <Section>
      <Title>Pomodoro</Title>
    </Section>
  );
}

export default Header;
