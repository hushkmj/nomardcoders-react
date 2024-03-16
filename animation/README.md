# Animations

## Installation

환경설정  
https://www.framer.com/motion/

npm i styled-components  
npm i -D @types/styled-components  
npm i framer-motion

```
motion.div
```

npm install @craco/craco --save  
root경로에 craco.config.js 생성

```
module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: "javascript/auto",
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
};
```

package.json 수정

```
"start": "craco start"
"build": "craco build"
"test": "craco test"
```

## Basic Animations

```
const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
    <Box
    transition={{ type: "spring", bounce: 0.5 }}
    initial={{ scale: 0 }} // 애니메이션 시작
    animate={{ scale: 1, rotateZ: 360 }} // 애니메이션 끝
    />
```

## Variants

프레이머 속성들을 자바스크립트 오브젝트 형식으로 사용할 수 있게 해주는 속성  
자식요소에게도 애니메이션을 전달함

```
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5, // 자식컴포넌트들은 0.5초만큼 딜레이를 가짐
      staggerChildren: 0.5, // 자식컴포넌트들은 0.5초만큼 시차를 가진다.
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

<Box variants={boxVariants} initial="start" animate="end">
    <Circle variants={circleVariants} />
    <Circle variants={circleVariants} />
    <Circle variants={circleVariants} />
    <Circle variants={circleVariants} />
</Box>
```

## Gestures, Drag

마우스 이벤트 애니메이션 부여

```
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
```

## MotionValue

useMotionValue: "컴포넌트의 motionValue를 리턴합니다.(State가 아님 > 변화가 있어도 재랜더링되지 않음.)",  
useTransform: "하나 이상의 다른 MotionValue의 출력을 가져와서 어떤 방식으로든 변경하는 MotionValue를 생성합니다 .",  
useScroll: "화면의 스크롤이 발생했을때 motionValue를 리턴합니다.",  
useMotionValueEvent: "motionValue를 state처럼 추적합니다."

```
const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
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

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 242, 247), rgb(75, 136, 249))",
      "linear-gradient(135deg, rgb(0, 238, 178), rgb(238, 178, 0))",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollYProgress: ", latest);
  });
  return (
    <Wrapper style={{ background: gradient }}>
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
```
