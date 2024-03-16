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

## SVG Animation (AirBnb 마크 애니메이션 적용하기)

pathLength: "경로의 전체 길이를 사용자 단위로 지정할 수 있게 됨",  
fill: "모양과 텍스트 요소의 면 색상 지정",  
motion.path: "animation 효과를 주려면 motion을 적용해야됨",  
stroke: "모양이나 텍스트의 외곽선 색상 지정",  
stroke-width: "모양이나 텍스트의 외곽선 두께 지정"

```
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};
function App() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path
          variants={svg}
          initial={"start"}
          animate={"end"}
          // 각각 다른 타이밍에 animate를 하고 싶거나 각기 다른 설정을 하고싶다면 transition prop를 써야함.
          transition={{
            default: { duration: 5 },
            fill: { duration: 1, delay: 2 },
          }}
          d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
        />
      </Svg>
    </Wrapper>
  );
}
```

## AnimatePresence

AnimatePresence는 Reactjs App에서 사라지는 컴포넌트를 animate한다.

```
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: { opacity: 0, scale: 0, y: 50 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial={"initial"}
            animate={"visible"}
            exit={"leaving"}
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
```

## Slider

AnimatePresence 활용  
custom은 variants에 파라미터를 전달할 수 있다.  
파라미터를 전달받은 variants는 이를 사용하려면 화살표함수로 변경시켜줘야 한다.  

```
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};
function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  // ReactJs는 key를 바꿔주는 것만으로 element가 사라졌다고 생각한다.
  const nextPlease = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      {/* mode="wait"(onExitComplete는 이제 지원안함): 일반적으로는 애니메이트가 동시에 실행됨. 한 개의 애니메이트가 끝나고 순차적으로 다음 애니메이트를 실행시킨다. */}
      <AnimatePresence mode="wait" custom={isBack}>
        <Box
          custom={isBack}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}
```
