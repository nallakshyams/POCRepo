
//init, reducer , actions
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cakeSliceActions } from "../cake/cakeSlice";

type InitialState = {
  noOfIceCreams:number
}
const initialState:InitialState = {
  noOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action:PayloadAction<number>) => {
      state.noOfIceCreams -= action.payload;
    },
    restocked: (state, action:PayloadAction<number>) => {
      state.noOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    //decreasing no of icecreams when cake is ordered
    builder.addCase(cakeSliceActions.ordered, (state, action) => {
      state.noOfIceCreams -= action.payload;
    });
  },
});

const { reducer: iceCreamReducer, actions: iceCreamActions } = iceCreamSlice;
export { iceCreamReducer, iceCreamActions };
