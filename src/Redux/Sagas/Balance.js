import { put, takeEvery } from 'redux-saga/effects';
import { requested, failed, loaded } from '@/Redux/Slices/Balance';
import api from '@/Api';
import { apiKey, address } from '@/Constants';

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchBalance() {
  // yield delay(2000);

  try {
    const payload = yield api()
      .get(
        `/?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`
      )
      .then((response) => response.data);

    yield put(loaded(payload));
  } catch (error) {
    if (error.response) {
      yield put(failed(error.response.status));
    } else if (error.request) {
      yield put(failed('Network Error'));
    } else {
      yield put(failed('Unknown Error'));
    }
  }
}

export default function* watchBalaceRequested() {
  yield takeEvery(requested.type, fetchBalance);
}
