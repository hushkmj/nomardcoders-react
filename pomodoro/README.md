# Pomodoro

## 1. 개발환경 구축

- npx create-react-app pomodoro --template typescript
- npm i recoil
- npm i styled-components
- npm i -D @types/styled-components
- npm i framer
- npm i @craco/craco --save
- root경로에 craco.config.js 생성

```
module.exports = {
    webpack: {
        onfigure: {
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
- package.json 수정
```
"start": "craco start"
"build": "craco build"
"test": "craco test"ß
```

## 2. 레이아웃 구성

- header, contents, footer
- 퍼블리싱(애니메이션 제외)부터 구현
- 단위테스트

## 3. 기능 구현

- 타이머 감소 이벤트 구현
- 시작/정지 버튼 이벤트 구현
- ROUND 구현
- GOAL 구현
- 단위테스트

## 4. 애니메이션 구현

- 타이머 애니메이션 구현
- 시작/정지 버튼 애니매이션 구현

## 5. 통합테스트
