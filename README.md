# nomardcoders-react  
노마드코더 리액트 스터디 10주 챌린지  

# 2024.02.19  
[✅] ReactJS로 영화 웹 서비스 만들기: From #1.2 to #2.6  
[✅] Quiz  
[✅] git repository 생성

# 2024.02.20  
[✅] ReactJS로 영화 웹 서비스 만들기: From #3.0 to #3.3  
[✅] Quiz  
[✅] 기억에 남는 코드  
```
const [value, setValue] = useState(); // return [undefined, fn]
```

# 2024.02.21  
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
