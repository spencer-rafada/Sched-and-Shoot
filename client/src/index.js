import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const PHOTOGRAPHER = [
  {name: 'Spencer', location: 'Rexburg'},
  {name: 'Hana', location: 'Rexburg'},
  {name: 'Gesder', location: 'Texas'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App list={PHOTOGRAPHER}/>
  </React.StrictMode>
);
