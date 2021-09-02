import { configureStore } from "@reduxjs/toolkit"
import counterReducers from '../features/counter/counterSlice'
import { apiSlice } from '../features/dogs/dogs-api-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducers,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
