import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { register } from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  register();
}
