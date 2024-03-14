import { createSlice } from '@reduxjs/toolkit'
import { CounterScema } from '../Types/CounterScema'

const initialState: CounterScema = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  },
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
