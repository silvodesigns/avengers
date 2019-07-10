import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';


// In order to initialize the routing we have to wrap our app component
// with the Router component 


ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
