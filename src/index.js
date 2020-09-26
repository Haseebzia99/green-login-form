import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import GreenLoginForm from './GreenLoginForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GreenLoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
