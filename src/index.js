import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopBar from './Components/NavBar';
import Card1 from './Components/Card';
import Store from './Components/StoreListing';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TopBar />
    <Card1 />
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);

