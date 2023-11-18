import React, { useState } from 'react';
import styles from './index.module.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle input changes for Num1 and Num2
  const handleInputChange = (e, setNum) => {
    const inputValue = e.target.value;

    // Check if the input is a valid number
    if (!isNaN(inputValue) || inputValue === '' || inputValue === '-') {
      setErrorMessage('');
      setNum(inputValue);
    } else {
      setErrorMessage('Invalid input. Please enter a valid number.');
    }
  };

  // Function to perform arithmetic operations based on the operator
  const performCalculation = (operator) => {
    // Convert input values to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check if both inputs are valid numbers
    if (!isNaN(number1) && !isNaN(number2)) {
      setErrorMessage('');

      // Perform the calculation based on the operator
      switch (operator) {
        case '+':
          setResult(number1 + number2);
          break;
        case '-':
          setResult(number1 - number2);
          break;
        case '*':
          setResult(number1 * number2);
          break;
        case '/':
          // Check for division by zero
          if (number2 !== 0) {
            setResult(number1 / number2);
          } else {
            setErrorMessage('Cannot divide by zero.');
          }
          break;
        default:
          setErrorMessage('Invalid operator.');
          break;
      }
    } else {
      setErrorMessage('Invalid input. Please enter valid numbers.');
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorChild} />
      <div className={styles.calculatorItem} />
      <div className={styles.reactCalculatorParent}>
        <b className={styles.reactCalculator}>React Calculator</b>
        <div className={styles.groupParent}>
          {/* Buttons for arithmetic operations */}
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div
                className={styles.groupChild}
                onClick={() => performCalculation('+')}
              />
              <b className={styles.b} onClick={() => performCalculation('+')}>+</b>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.groupWrapper}>
              <div
                className={styles.groupChild}
                onClick={() => performCalculation('-')}
              />
              <b className={styles.b1} onClick={() => performCalculation('-')}>-</b>
            </div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.groupWrapper}>
              <div
                className={styles.groupChild}
                onClick={() => performCalculation('*')}
              />
              <b className={styles.b2} onClick={() => performCalculation('*')}>*</b>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupWrapper}>
              <div
                className={styles.groupChild}
                onClick={() => performCalculation('/')}
              />
              <b className={styles.b3} onClick={() => performCalculation('/')}>/</b>
            </div>
          </div>
        </div>
        {/* Input fields for Num1 and Num2 */}
        <div className={styles.num1Parent}>
          <input
            type="text"
            placeholder="Num 1"
            value={num1}
            onChange={(e) => handleInputChange(e, setNum1)}
          />
          <div className={styles.groupChild1} />
        </div>
        <div className={styles.num2Parent}>
          <input
            type="text"
            placeholder="Num 2"
            value={num2}
            onChange={(e) => handleInputChange(e, setNum2)}
          />
          <div className={styles.groupChild1} />
        </div>
      </div>
      {/* Display error message if any */}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      {/* Display result if available */}
      {result !== null && (
        <div className={styles.successMessage}>
          Result: {result.toFixed(2)} {/* Display result with 2 decimal places */}
        </div>
      )}
    </div>
  );
};

export default Calculator;
