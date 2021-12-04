import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
 import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { reducers } from './reducers';
import App from './App';
import './index.css';

import { mySaga } from './actions/rootSaga';


const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, thunk];
// Mount it on the Store
// const store = createStore(
//   reducers,
//   applyMiddleware(sagaMiddleware)
// )

// Then run the saga


const store = createStore(reducers, compose(
  applyMiddleware(...middleware)
));
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
