import styled from "styled-components";
import Minute from "../screens/Minute";
import Colon from "../screens/Colon";
import Second from "../screens/Second";
import Button from "../Components/Button";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Play = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
function Content() {
  return (
    <Section>
      <Timer>
        <Second />
        <Colon />
        <Minute />
      </Timer>
      <Play>
        <Button />
      </Play>
    </Section>
  );
}

export default Content;
