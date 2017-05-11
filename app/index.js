import React from 'react';
import {render} from 'react-dom';
import ClientComponent from './components/ClientComponent';
import Home from './components/home/home';
import Main from './components/main/main';
import Like from './components/like/Like';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var routes = require('./config/routes');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
//var routes = require('./config/routes')

class App extends React.Component {
    render () {
        return (<div>
            <MuiThemeProvider>
                <ClientComponent/>
            </MuiThemeProvider>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));