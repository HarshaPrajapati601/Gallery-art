import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; //we pass a set of reducers to it and it returns a redux store that consists all of our reducers /data/state
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import reducers from './Reducers';

//Our goal is to make sure that we get that provider tag at the very top of our component hierarchy and
// we need to make sure that we also pass it a reference to our Redux store that gets all of our reducers into it

//Now, create an instance of the provider and wrap our app component with it.

ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
