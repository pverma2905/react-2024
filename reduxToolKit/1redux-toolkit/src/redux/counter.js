import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {name:"seema", age:10, contact:123456789},
  list: ["sugar", "coffee","tea","floor"]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCount: (state) => {
      state.value.age += 1
    },
    minusCount: (state) => {
      state.value.age -= 1
    },
    incrementByAmount: (state, action) => {
      state.value.age += action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { addCount, minusCount, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer