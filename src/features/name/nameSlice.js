import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Kylo Ren',
  status: 'idle',
};

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeName: (state, action) => {
      console.log(action);
      console.log(action.payload);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

export const { changeName } = nameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectName = (state) => state.name.value;

export default nameSlice.reducer;
