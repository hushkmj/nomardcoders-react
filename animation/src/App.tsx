import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { borderRadius: "100px" },
  drag: {
    backgroundColor: "rgba(50, 255, 126,1.0)",
    transition: { duration: 5 }, // 컴포넌트를 드래그중에 백그라운드컬러가 전환되는 시간을 설정한다.
  },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null); // 특정 Element를 잡는 리액트 훅
  return (
    <Wrapper>
      {/* 아래의 BiggerBox는 biggerBoxRef 코드조각하고 연결됨 */}
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag //컴포넌트를 드래그할 수 있게 하는 속성
          dragSnapToOrigin // 드래그를 마친 컴포넌트가 본래 자리로 돌아감.
          dragElastic={0.5} // 드래그중인 컴포넌트를 본래 자리로 '당기는 힘'
          dragConstraints={biggerBoxRef} //드래그의 이동범위를 제약한다. (biggerBoxRef == BiggerBox)
          variants={boxVariants}
          whileHover={"hover"} // 컴포넌트에 마우스를 올려둘때의 이벤트 속성
          whileTap={"click"} // 컴포넌트에 마우스를 클릭했을때의 이벤트 속성
          whileDrag={"drag"}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
