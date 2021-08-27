// DUCKS pattern 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // we don't need action here
    incremented(state) {
      // if you are using redux toolkit then you just need to update state becasue of immer make it immutable
      // and it automatically refresh the UI , you don't need to do like {...state, value ++} 
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    }
  }
})

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;