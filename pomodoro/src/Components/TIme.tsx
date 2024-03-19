import styled from "styled-components";

const Number = styled.div`
  width: 150px;
  height: 250px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

interface ITime {
  value: number;
}

function Time({ value }: ITime) {
  return (
    <>
      <Number>{value >= 10 ? value : `0${value}`}</Number>
    </>
  );
}

export default Time;
