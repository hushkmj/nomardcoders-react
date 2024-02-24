import { useState } from "react";

function App() {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [operation, setOperation] = useState();

  const onChangeForFirstNum = (event) => {
    setFirstNum(event.target.value);
  }

  const onChangeForSecondNum = (event) => {
    setSecondNum(event.target.value);
  }

  const onChangeForOperation = (event) => {
    setOperation(event.target.value)
  }

  const fnValidate = () => {
    let target = document.getElementById("resultMsg");

    if (firstNum == "" || firstNum == undefined) {
      target.innerText = "Please input the firstNum";
      return false;
    }
    if (secondNum == "" || secondNum == undefined) {
      target.innerText = "Please input the secondNum";
      return false;
    }
    if (operation == undefined) {
      target.innerText = "please select the operation";
      return false;
    }

    return true;
  }

  const fnCalculate = () => {
    if (!fnValidate()) return;

    let msg = "";

    switch (operation) {
      case "+":
        msg = `The result is ${Number(firstNum) + Number(secondNum)}`;
        break;
      case "-":
        msg = `The result is ${Number(firstNum) - Number(secondNum)}`;
        break;
      case "/":
        if (Number(firstNum) == 0) {
          msg = "The firstNum can't be zero";
        } else {
          msg = `The result is ${Number(firstNum) / Number(secondNum)}`;
        }
        break;
      case "*":
        msg = `The result is ${Number(firstNum) * Number(secondNum)}`;
        break;
    }

    document.getElementById("resultMsg").innerText = msg;
  }

  return (
    <div className="container">
      <h1>🔥 Calculator 🔥</h1>
      <input type="number"
        placeholder="Write a number..."
        value={firstNum}
        onChange={onChangeForFirstNum}
      />
      <input type="number"
        placeholder="And another one..."
        value={secondNum}
        onChange={onChangeForSecondNum}
      />
      <select onChange={onChangeForOperation}>
        <option>Select operation</option>
        <option>+</option>
        <option>-</option>
        <option>/</option>
        <option>*</option>
      </select>
      <button onClick={fnCalculate}>Calculate</button>
      <span style={{ textAlign: "center" }}>
        <p id="resultMsg"></p>
      </span>

    </div>
  );

}

export default App;
