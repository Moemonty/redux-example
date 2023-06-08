import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import nameReducer from '../features/name/nameSlice'
import { logObjValues } from './helpers/log';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});

// Let's examine the store
logObjValues(store.getState());
