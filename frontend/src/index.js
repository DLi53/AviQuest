import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import configureStore from "./store/store";

const store = configureStore();

function Root() {
  const store = configureStore();

  return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
  );
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let store = configureStore({})

function Root(){
  const store = configureStore();

  return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
