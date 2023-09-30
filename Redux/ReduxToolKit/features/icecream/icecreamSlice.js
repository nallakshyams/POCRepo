//init, reducer , actions
const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeSliceActions } = require("../cake/cakeSlice");

const initialState = {
  noOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfIceCreams -= action.payload;
    },
    restocked: (state, action) => {
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

module.exports.iceCreamReducer = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
