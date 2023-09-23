import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions/dataActions';

function* fetchData() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/posts',
    );
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}
