import React from 'react';
import {render} from 'react-dom';
import ClientComponent from './components/ClientComponent';

class App extends React.Component {
    render () {
        return (
            <div>
                <ClientComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));