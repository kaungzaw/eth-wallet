import { all } from 'redux-saga/effects';
import watchBalaceRequested from './Balance';

export default function* rootSaga() {
  yield all([watchBalaceRequested()]);
}
