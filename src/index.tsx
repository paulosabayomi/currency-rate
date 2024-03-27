import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import { store } from './shared/store';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

