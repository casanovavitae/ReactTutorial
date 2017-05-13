import React from 'react';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
              <h1>Hello, world!</h1>
              <p>Text</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        );
    }

}

export default HomeComponent;
