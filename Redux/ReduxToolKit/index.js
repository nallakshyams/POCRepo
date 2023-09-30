//create a slice with state, reducer and actions //CreateSlice
//create store with reducer(s)  configureStore
//in index.js dispatch the actions to store
const store = require("./app/store");
const { cakeSliceActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/icecream/icecreamSlice");
const { fetchUsers } = require("./features/user/userSlice");
console.log("initial state", store.getState());
store.subscribe(() => {
  console.log("updated state", store.getState());
});
store.dispatch(fetchUsers());
// store.dispatch(cakeSliceActions.ordered(1));
// store.dispatch(cakeSliceActions.ordered(1));
// store.dispatch(cakeSliceActions.ordered(1));
// store.dispatch(cakeSliceActions.restocked(3));

// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.restocked(3));
