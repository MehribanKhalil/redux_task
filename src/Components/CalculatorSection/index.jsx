import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "../../Redux/Features/calculatorSlice";

const CalculatorSection = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  const [inpValue1, setInpValue1] = useState(0);
  const [inpValue2, setInpValue2] = useState(0);

  const handleDivision = () => {
    if (inpValue2 !== 0) {
      dispatch(
        division({
          num1: parseInt(inpValue1),
          num2: parseInt(inpValue2),
        })
      );
    } else {
      console.error("cant divide by 0");
    }
  };

  return (
    <div>
      <h1>Calculator</h1>

      <div>
        <div>
          <label htmlFor="input1">Number 1:</label>
          <input
            className=" text-bg-dark  border-dark btn-outline-dark"
            type="number"
            value={inpValue1}
            onChange={(e) => setInpValue1(e.target.value)}
          />
        </div>
        <div>
         
          <label htmlFor="input1">Number 2:</label>
          <input
          className=" text-bg-dark  border-dark btn-outline-dark"
            type="number"
            value={inpValue2}
            onChange={(e) => setInpValue2(e.target.value)}
          />
        </div>
      <div className="my-2">
      <button
      className=" text-bg-dark"
          onClick={() =>
            dispatch(
              addition({
                num1: parseInt(inpValue1),
                num2: parseInt(inpValue2),
              })
            )
          }
        >
          +
        </button>
        <button
        className=" text-bg-dark"
          onClick={() =>
            dispatch(
              subtraction({
                num1: parseInt(inpValue1),
                num2: parseInt(inpValue2),
              })
            )
          }
        >
          -
        </button>
        <button
        className=" text-bg-dark"
          onClick={() =>
            dispatch(
              multiplication({
                num1: parseInt(inpValue1),
                num2: parseInt(inpValue2),
              })
            )
          }
        >
          *
        </button>
        <button className=" text-bg-dark" onClick={handleDivision}>/</button>
      </div>
        <h5 className=" text-danger">{result}</h5>
      </div>
    </div>
  );
};

export default CalculatorSection;
