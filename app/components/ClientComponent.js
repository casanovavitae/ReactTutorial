import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import Navbar from './global/NavbarComponent';
import Home from './home/home';
import Main from './main/main';
import LikeComponent from './like/LikeComponent';
import ResumeComponent from './resume/ResumeComponent';

const tilesData = [
  {
    id: 1,
    img: 'https://dl.dropboxusercontent.com/s/ngctr4ps3370kml/twiiter-like.png',
    title: 'Like',
    author: 'jill111',
    path: 'Like',
  },
  {
    id: 2,
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
    path: 'Like',
  },
  {
    id: 3,
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
    path: 'Like',
  },
  {
    id: 4,
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    path: 'Like',
  }
];

class ClientComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Router>
                    <div>
                    <Navbar dataList={tilesData}/> 
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/main" component={Main}/>
                        <Route path="/Like" component={LikeComponent}/>
                        <Route path="/Resume" component={ResumeComponent}/>
                        
                    </div>
                </Router>
            </div>

        );
    }

}

export default ClientComponent;