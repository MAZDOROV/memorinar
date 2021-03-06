import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import './index.css';
import App from './Container/App';
import reportWebVitals from './reportWebVitals';

import { rootReducer } from './Reducer/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
