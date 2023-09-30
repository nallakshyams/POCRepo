import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//create a cakeSlice with reducers and actions as well as init state along with the name
type InitialState = {
  noOfCakes:number
}
const initialState:InitialState= {
  noOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action:PayloadAction<number>) => {
      state.noOfCakes -= action.payload;
    },
    restocked: (state, action:PayloadAction<number>) => {
      state.noOfCakes += action.payload;
    },
  },
});

const { reducer: cakeSliceReducer, actions: cakeSliceActions } = cakeSlice;
export { cakeSliceReducer, cakeSliceActions };

//saga/thunk dispatch
//action payload
//reduce switch