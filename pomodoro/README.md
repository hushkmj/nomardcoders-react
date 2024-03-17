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

## 2. 레이아웃 구성

- header, contents, footer
