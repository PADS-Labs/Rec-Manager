import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter, 
    IndexRoute, 
    Route} from 'react-router-dom';
import App from './components/App.jsx';

console.log('hi domo!')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
