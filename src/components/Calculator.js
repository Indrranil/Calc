// src/components/Calculator.js
import React, { useState } from "react";
import "../App.css"; // Optional: for styling

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "." && input.endsWith(".")) return;
    if (["/", "*"].includes(value)) {
      if (input === "" || ["/", "*", "-", "+"].includes(input.slice(-1)))
        return;
    }
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      let sanitizedInput = input.replace(/--/g, "+");
      sanitizedInput = sanitizedInput.replace(/(\d)([+\-*/])(\d)/g, "$1$2$3");
      sanitizedInput = sanitizedInput.replace(/(\d)[+\-*/]{2,}(\d)/g, "$1$2");

      if (/^[\d()+\-*/.]+$/.test(sanitizedInput)) {
        setInput(eval(sanitizedInput).toString());
      } else {
        setInput("Error");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={handleClear} className="double-width">
          AC
        </button>
        <button onClick={handleBackspace}>DEL</button>
        <button onClick={() => handleClick("/")} className="operator">
          /
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")} className="operator">
          *
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")} className="operator">
          -
        </button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")} className="operator">
          +
        </button>
        <button onClick={() => handleClick("0")} className="double-width">
          0
        </button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate} className="operator">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
