import styled from "styled-components";
import { useEffect, useState } from "react";
import Play from "../Screens/Play";
import Timer from "../Screens/Timer";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Layout() {
  return (
    <Section>
      <Timer />
      <Play />
    </Section>
  );
}

export default Layout;
