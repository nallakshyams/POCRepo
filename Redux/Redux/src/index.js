const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.legacy_createStore;
const bindActionCrearors = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";
//global state
const initialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState = {
  noOfIceCreams: 20,
};
//reducer and also have a method which returns an action
const orderCake = (qty) => {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
};
const orderIceCream = (qty) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};
const resStockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
};
const resStockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
};
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      // return { ...state, noOfCakes: state.noOfCakes - action.payload };
      return produce(state, (draft) => {
        draft.noOfCakes = draft.noOfCakes - action.payload;
      });
    case CAKE_RESTOCK:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, noOfIceCreams: state.noOfIceCreams - action.payload };
    case ICECREAM_RESTOCK:
      return produce(state, (draft) => {
        draft.noOfIceCreams = draft.noOfIceCreams + action.payload;
      });
    case CAKE_ORDERED:
      // return { ...state, noOfCakes: state.noOfCakes - action.payload };
      return produce(state, (draft) => {
        draft.noOfIceCreams -= action.payload;
      });
    default:
      return state;
  }
};

//state, action, reducer is ready inorder to dipatch , we need to use redux store package

//create store with reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());
//subscribe to store which will return an unsubscribe method
const unsubscribe = store.subscribe(() => {
  //console.log("updated store data", store.getState());
});

const actions = bindActionCrearors(
  { orderCake, resStockCake, orderIceCream, resStockIceCream },
  store.dispatch
);
actions.orderCake(1);
actions.orderCake(1);
actions.orderCake(1);
actions.resStockCake(3);
actions.orderIceCream(1);
actions.orderIceCream(1);
actions.orderIceCream(10);
actions.resStockIceCream(3);

//unsubscribe
unsubscribe();
