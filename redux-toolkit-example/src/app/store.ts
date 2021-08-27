import { configureStore } from "@reduxjs/toolkit";
import counterReducers from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducers
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
