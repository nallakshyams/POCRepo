const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("initial state", store.getState());
store.subscribe(() => {
  console.log("updated store", store.getState());
});
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

store.dispatch(fetchUsers());
