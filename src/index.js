import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import {configureStore} from '@reduxjs/toolkit'
const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer:rootReducer,
})

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}>

  <Provider store={store}>
      <BrowserRouter>
        <Toaster/>
        <App />
      </BrowserRouter>
  </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
