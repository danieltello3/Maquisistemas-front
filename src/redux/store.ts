import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { clientSlice } from "./slice/client.slice";

export const rootReducer = combineReducers({
  client: clientSlice.reducer
});

type RootState = ReturnType<typeof rootReducer>;

const store = configureStore<RootState>({
  reducer: rootReducer
})

export type RootStateType = ReturnType<typeof store.getState>;

export default store