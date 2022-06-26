import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import { rootReducer } from './root-reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// applyMiddleware(saveProductMilldeware)
const store = createStore(rootReducer,  composeWithDevTools())

root.render(
  

    <App store={store} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
