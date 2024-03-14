import { configureStore } from "@reduxjs/toolkit";
import { stateScema } from "./stateScema";
import { counterReducer } from "app/enteties/Counter/model/Slice/counterSlice";




export function createReduxStore(initialState:stateScema) {
  return configureStore<stateScema>({
    reducer: { 
      counter:counterReducer
    },
    devTools:__IS_DEV__,
    preloadedState:initialState
  })
}

