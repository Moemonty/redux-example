import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// custom function to iterate through object
function showValues(store) {
  for (const property in store) {
    console.log(store[property]);
  }
}

// Let's examine the store
showValues(store.getState());
