import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    padding: 5px;
    font-size: 24px;
  }
`;

function Footer() {
  return (
    <Section>
      <Score>
        <div>0/4</div>
        <div>Round</div>
      </Score>
      <Score>
        <div>0/12</div>
        <div>Goal</div>
      </Score>
    </Section>
  );
}

export default Footer;
