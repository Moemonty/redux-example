import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

import {
  changeName,
  selectName
} from '../name/nameSlice';

import styles from './Counter.module.css';

const style = {
  marginTop: '20px',
  padding: '20px',
  border: 'solid 3px #000',
};

export function Counter() {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [updateName, setUpdateName] = useState('Kylo Ren');

  const incrementValue = Number(incrementAmount) || 0;
  const newName = String(updateName) || '';

  return (
    <div style={style}>
      <div>
        <h2>Hello there, {name}</h2>
        <h3>
          Change Name
        </h3>
        <fieldset>
        <input
          value={updateName}
          onChange={(e) => setUpdateName(e.target.value)}
        />
        {/* Pass in the payload when changing */}
        <button
          className={styles.button}
          onClick={() => dispatch(changeName(newName))}
        >
          Change Name
        </button>
        </fieldset>
      </div>

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
