const { cakeSliceReducer } = require("../features/cake/cakeSlice");
const { iceCreamReducer } = require("../features/icecream/icecreamSlice");
const { userReducer } = require("../features/user/userSlice");
//const logger = require("redux-logger").createLogger();
//create a store using reducers
const store = require("@reduxjs/toolkit").configureStore({
  reducer: {
    cake: cakeSliceReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
