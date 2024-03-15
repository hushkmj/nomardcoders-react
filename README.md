# 노마드코더 리액트 스터디 10주 챌린지  

### 2024.03.16  
[🔜] React JS 마스터클래스: From #8.0 to #8.16  
[🔜] Challenge: Pomodoro  
[✅] 기억에 남는 코드 : https://github.com/hushkmj/nomardcoders-react/blob/main/animation/README.md  

### 2024.03.13  
[✅] React JS 마스터클래스: From #6.0 to #6.10  
[✅] Challenge: Recoil + Forms  
[✅] 기억에 남는 코드  
```
export type ICountry = {
  key: number;
  value: string;
};
export interface ICountryList {
  wantToVisit: ICountry[];
  visited: ICountry[];
  liked: ICountry[];
}
export const countryListAtom = atom<ICountryList>({
  key: "countryList",
  default: {
    wantToVisit: [],
    visited: [],
    liked: [],
  },
});

const [countries, setCountries] = useRecoilState(countryListAtom);
  const countryList = useRecoilValue(countryListAtom);

  const fnChangeCountry = (item: ICountry, flag: string) => {
    const targetIndex = countries.wantToVisit.findIndex(
      (obj) => obj.key === item.key
    );

    if (flag === "add") {
      setCountries((prev) => ({
        ...prev,
        wantToVisit: [
          ...prev.wantToVisit.slice(0, targetIndex),
          ...prev.wantToVisit.slice(targetIndex + 1),
        ],
        visited: [...prev.visited, { key: item.key, value: item.value }],
      }));
    } else {
      setCountries((prev) => ({
        ...prev,
        wantToVisit: [
          ...prev.wantToVisit.slice(0, targetIndex),
          ...prev.wantToVisit.slice(targetIndex + 1),
        ],
      }));
    }
  };
```

### 2024.03.08  
[✅] React JS 마스터클래스: From #5.0 to #5.11  
[✅] Challenge: Routing + Fetching  
[✅] 생각정리  
```
/*
  업무와 스터디를 병행한다는게 쉽지 않구나...
*/
```

### 2024.03.01  
[✅] Typescript로 블록체인 만들기: From #4.0 to #4.2  
[✅] Challenge: Classes  
[✅] 코드메모  
```
/*
  - 클래스를 타입처럼 쓸 수 있다.
  - 생성자는 클래스로부터 객체를 생성할 때 즉시 호출된다. 객체의 초기화하는데 주로 사용됨.
*/
type Words = {
    [key:string]:string;
}
class Word {
    constructor(
        public name:string,
        public description:string
    ){}
}
class Dict {
    private words:Words;
    constructor(){
        this.words = {}
    }
  ...
}
``` 
### 2024.02.29  
[] Typescript로 블록체인 만들기: From #4.0 to #4.2  
[] Challenge: Classes  
[] 코드메모  

### 2024.02.28  
[✅] Typescript로 블록체인 만들기: From #3.2 to #3.4  
[✅] Challenge: Generics  
[✅] 코드메모  
```
/* 타입스크립트 문법에 익숙해져간다. */
type Slice = <T>(arr: T[], startIndex: number, endIndex?: number) => T[]
const slice:Slice = (arr, startIndex, endIndex) => {
    return arr.slice(startIndex, endIndex)
}
```
### 2024.02.27  
[✅] Typescript로 블록체인 만들기: From #2.2 to #3.1  
[✅] Quiz  
[✅] 코드메모  
```
/*
  For what do we use Type Aliases? => To create a new name for a type
  타입의 별칭이 필요한 이유를 타입이 필요한 이유로 착각함.
*/
```  

### 2024.02.26  
[✅] Typescript로 블록체인 만들기: From #1.5 to #2.1  
[✅] Quiz  
[✅] 기억에 남는 코드  
```
/*
  타입스크립트는 사용하기가 번거롭다. 그래서 강의를 반복 시청해서 익숙해져야한다.
*/
```  

### 2024.02.25   
[✅] Challenge: Marvelous React  
[✅] 기억에 남는 코드  
```
/*
  로컬과 코드샌드박스 환경은 차이가 있다.
  css 마스터클래스 수강 필수...
*/
```
  
### 2024.02.24  
[✅] ReactJS로 영화 웹 서비스 만들기: From #7.0 to #7.10  
[] Challenge: Marvelous React  
[✅] 기억에 남는 코드  
```
/*
  useState
  useEffect
  useParam
  react-router-dom 5.3.3
  Props
  Component
  fetch
  map
  ...Array
  create-react-app
*/
```

### 2024.02.23  
[✅] ReactJS로 영화 웹 서비스 만들기: From #5.0 to #6.4  
[✅] Quiz  
[✅] 기억에 남는 코드  
```
useEffect is allows us to run code at specific moments of the component's lifecycle
```

### 2024.02.22  
[✅] ReactJS로 영화 웹 서비스 만들기: From #4.0 to #4.3  
[✅] Quiz  
[✅] 기억에 남는 코드  
```
function Theme({color, background}) // props is Object
React.memo // Only changed props re-render 
PropTypes // Custom component validate
```
  
### 2024.02.21  
[✅] ReactJS로 영화 웹 서비스 만들기: From #3.4 to #3.9  
[✅] Challenge: Calculator  
[✅] 기억에 남는 코드  
```
setValue((current) => current + 1);
```
``` html:index.html
const [firstNum, setFirstNum] = React.useState();
const onChangeForFirstNum = (event) => {  
  setFirstNum(event.target.value);
}
// value, onChange 는 세트로 기억할 것.
<input
  type="number" 
  placeholder="Write a number..." 
  value={firstNum}
  onChange={onChangeForFirstNum}
/>
``` 
  
### 2024.02.20  
[✅] ReactJS로 영화 웹 서비스 만들기: From #3.0 to #3.3  
[✅] Quiz  
[✅] 기억에 남는 코드  
```
const [value, setValue] = useState(); // return [undefined, fn]
```

### 2024.02.19  
[✅] ReactJS로 영화 웹 서비스 만들기: From #1.2 to #2.6  
[✅] Quiz  
[✅] git repository 생성
