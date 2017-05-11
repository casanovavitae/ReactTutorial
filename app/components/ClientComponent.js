import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import Home from './home/home';
import Main from './main/main';
import Like from './like/Like';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://dl.dropboxusercontent.com/s/ngctr4ps3370kml/twiiter-like.png',
    title: 'Breakfast',
    author: 'jill111',
    link: '',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class ClientComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    setLink(){
          browserHistory.push('/Link');
      }

    render() {
        return (
            <div>
            <Router>
            <div>
                  <div style={styles.root}>
                    <GridList
                      cellHeight={180}
                      style={styles.gridList}
                    >
                      <Subheader>December</Subheader>
                      {tilesData.map((tile) => (
                        <Link to="/Like">
                                <GridTile
                                  onClick={this.setLink}
                                  key={tile.img}
                                  title={tile.title}
                                  subtitle={<span>by <b>{tile.author}</b></span>}
                                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                                >
                                  <img src={tile.img} />
                                </GridTile>
                        </Link>
                      ))}
                    </GridList>
                  </div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/main" component={Main}/>
                        <Route path="/like" component={Like}/>
                    </div>
            </Router>
            </div>

        );
    }

}

export default ClientComponent;