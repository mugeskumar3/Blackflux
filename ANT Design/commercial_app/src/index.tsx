import React from 'react';
import ReactDOM from 'react-dom';
import Approute from './AppRouting/approute';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <Approute />
  </React.StrictMode>,
  root
);
