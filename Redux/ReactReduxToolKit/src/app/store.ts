
import { cakeSliceReducer } from "../features/cake/cakeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { iceCreamReducer } from "../features/icecream/icecreamSlice";
import { userReducer } from "../features/user/userSlice";

//const logger = require("redux-logger").createLogger();
//create a store using reducers
const store = configureStore({
  reducer: {
    cake: cakeSliceReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType <typeof store.getState>