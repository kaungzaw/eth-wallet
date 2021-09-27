import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import balanceReducer from '@/Redux/Slices/Balance';
import rootSaga from '@/Redux/Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
