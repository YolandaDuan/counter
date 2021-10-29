import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// action
export const increment = (x) => {
  return {
      type: 'INCREMENT',
      payload: x
  };
};

export const decrement = () => {
  return {
      type: 'DECREMENT'
  };
};

// reducer
const counter = (state = 0, action) => {
  switch(action.type) {
      case 'INCREMENT': 
          return state + action.payload;
      case 'DECREMENT':
          return state - 1;
      default:
          return state;
  }
}

// store
let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment(5));
store.dispatch(increment(5));
store.dispatch(decrement());

ReactDOM.render(
    <App />,
  document.getElementById('root')
);



