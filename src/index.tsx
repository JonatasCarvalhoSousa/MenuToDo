import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Todo from './list/cadastro';
import Historia from './list/historiaTodo';
import Vantagens from './list/vantagensTodo';

ReactDOM.render(
    (<BrowserRouter>  
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/cadastro" component={Todo}/>
            <Route exact path="/historiaTodo" component={Historia}/>
            <Route exact path="/vantagensTodo" component={Vantagens}/>
        </Switch>
    </BrowserRouter>),
    document.getElementById('root'));

reportWebVitals();
