import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Todo from './list/cadastro';


ReactDOM.render(
    (<BrowserRouter>  
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/cadastro" component={Todo}/>
        </Switch>
    </BrowserRouter>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
reportWebVitals();
