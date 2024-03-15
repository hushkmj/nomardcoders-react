# Animation

## Installation

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
