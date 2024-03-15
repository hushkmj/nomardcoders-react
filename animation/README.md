# Animations

## Installation

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

framer 속성들을 javascript Object 형식으로 사용할 수 있게 해주는 속성
자식요소에게도 animation을 전달함

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
