import { takeEvery, takeLatest, call, fork, put, take } from 'redux-saga/effects';
import * as actions from '../actions/userAction';
import * as api from '../api/usersApi';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);

    yield put(actions.getUsersSuccess({
      items: result.data.data
    }));
  } catch (error) {
    yield put(actions.usersError(error.message))
  }
}

function* createUser(action) {
  try {
    yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName});
    yield call(getUsers);
  } catch (error) {
    yield put(actions.usersError(error.message))
  }
}

function* deleteUser({userId}) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (error) {
    yield put(actions.usersError(error.message))
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);

    yield call(deleteUser, {userId: action.payload.userId})
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
]

export default usersSagas;
