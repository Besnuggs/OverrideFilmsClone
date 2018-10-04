import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {ParallaxProvider} from  'react-scroll-parallax'
import routes from './routes.js';
import './reset.css'

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <div>
        <Header />
        {routes}
        <Footer />
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
