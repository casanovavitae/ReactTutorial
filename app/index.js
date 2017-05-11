import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
var routes = require('./config/routes');
import AwesomeComponent from './components/AwesomeComponent';
import Home from './components/home/home';
import Main from './components/main/main';
//var routes = require('./config/routes')

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/home">About</Link></li>
                        <li><Link to="/main">Topics</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={AwesomeComponent}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/main" component={Main}/>
                </div>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('app'));