/*
  + maybe try hashing each image, and saving that data as well.
    or maybe us that as the id in order to prevent duplicate images
    (https://stackoverflow.com/questions/15208640/hashing-an-image-in-javascript)
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { loadImagesFromLocalStorage, clearAllImages } from '../actions';

import Gallery from './Gallery';

import '../styles/App.css';
import '../styles/buttons.css';

// const darkTheme = createMuiTheme({
//   pallete: {
//     type: 'dark'
//   }
// });

class App extends Component {
  componentWillMount() {
    this.props.loadImagesFromLocalStorage();
  }
  render() {
    return (
      <MuiThemeProvider>
        <Gallery />
      </MuiThemeProvider>
    );
  }
}

export default connect(null, { loadImagesFromLocalStorage, clearAllImages })(
  App
);
