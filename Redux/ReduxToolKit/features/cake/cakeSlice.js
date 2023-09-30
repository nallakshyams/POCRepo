const createSlice = require("@reduxjs/toolkit").createSlice;
//create a cakeSlice with reducers and actions as well as init state along with the name
const initialState = {
  noOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.noOfCakes += action.payload;
    },
  },
});
module.exports.cakeSliceReducer = cakeSlice.reducer;
module.exports.cakeSliceActions = cakeSlice.actions;

//saga/thunk dispatch
//action payload
//reduce switch
