import { useState } from 'react';
import classes from './UserInput.module.css';

const initialUserValue = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
};

export default function UserInput({onCalculate}) {
  const [userInput, setUserInput] = useState(initialUserValue);

  function submitHandler(event) {
    event.preventDefault();

    onCalculate(userInput);
  };

  function resetHandler() {
    setUserInput(initialUserValue);
  };

  function changeHandler(input, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      }
    });
  }

  return (
    <form onSubmit={submitHandler } className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => changeHandler('current-savings', event.target.value)} type="number" id="current-savings" value={userInput['current-savings']} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input  onChange={(event) => changeHandler('yearly-contribution', event.target.value)}
            type="number" id="yearly-contribution" value={userInput['yearly-contribution']} />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
          <input onChange={(event) => changeHandler('expected-return', event.target.value)} type="number" id="expected-return" value={ userInput['expected-return']} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input  onChange={(event) => changeHandler('duration', event.target.value)} type="number" id="duration" value={userInput['duration']} />
          </p>
        </div>
        <p className={classes.actions}>
          <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
  )
}