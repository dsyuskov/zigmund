import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';

import { watchGetRepositories } from '../sagas/saga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watchGetRepositories);

export default store;
