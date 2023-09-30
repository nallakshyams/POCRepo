const { createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");
const createSlice = require("@reduxjs/toolkit").createSlice;

//below method will create and dispatch actions asynchronously
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const initialState = {
  loading: true,
  data: [],
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

module.exports.userReducer = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
