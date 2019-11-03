import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BooksApp from './App';
// import BrowserRouter from 'react-router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BooksApp /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
