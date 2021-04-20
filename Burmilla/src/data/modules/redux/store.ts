import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';

import reducer from './reducers';
// import sagas from './middlewares';

const sagaMiddleWare = reduxSaga();

export type AppState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,//리듀서만 만들어주면 됨
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
