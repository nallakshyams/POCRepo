
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

//below method will create and dispatch actions asynchronously
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});
type User = {
  id:number,
  name:string
}
type InitialState = {
  loading:boolean,
  data:User[],
  error:string
}
const initialState:InitialState = {
  loading: true,
  data: [],
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

const { reducer: userReducer } = userSlice;
export { userReducer };
export default fetchUsers;