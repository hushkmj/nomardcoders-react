import styled from "styled-components";
import Colon from "../Components/Colon";
import Time from "../Components/Time";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { playState, timeState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Timer() {
  const defaultTime = useRecoilValue(timeState);
  const isPlay = useRecoilValue(playState);
  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isPlay && time > 0) {
      intervalId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlay, time]);

  return (
    <Wrapper>
      <Time value={Math.round(time / 60)} />
      <Colon />
      <Time value={Math.round(time % 60)} />
    </Wrapper>
  );
}

export default Timer;
