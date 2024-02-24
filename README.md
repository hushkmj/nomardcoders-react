# nomardcoders-react  
노마드코더 리액트 스터디 10주 챌린지  

### 2024.02.23  
[] ReactJS로 영화 웹 서비스 만들기: From #7.0 to #7.10  
[] Challenge: Marvelous React  
[✅] 기억에 남는 코드  
```
const [toDo, setTodo] = useState("");
const [toDos, setToDos] = userState([]);
const onChange = (event) => setToDo(event.target.value);
const onSubmit = (event) =>{
  event.preventDefault();
  if(toDo === ""){
    return;
  }
  setTodos((currentArray)-> [todo, ...currentArray])
  setToDo("")
}

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
