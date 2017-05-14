import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';

class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
	            <nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">
				        <img alt="Brand"/>
				      </a>
				    </div>
				  </div>
				   <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
				        <li><Link to="Resume">Resume</Link></li>
				        <li className="dropdown">
				          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
				          	Exercices <span className="caret"></span>
				          </a>
				          <ul className="dropdown-menu">
					          {this.props.dataList.map((tile) => (
	                            <Link key={tile.id.toString()} to={tile.path}>
	                                   <li key={tile.id.toString()}>{tile.title}</li>
	                            </Link>
	                          ))}
				          </ul>
				        </li>
				      </ul>
			      </div>
				</nav>
            </div>
        );
    }

}

export default NavbarComponent;