import React, { Component } from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import ContextProvider from './Context/Context';
import './App.css';


class App extends Component {

  state = {
    showdetails: false,
  }

    showDetailsBlock = () => {
    this.setState(prev => ({
      showdetails: !prev.showdetails
    }))
  }

  render() {
    return (
      <ContextProvider>
        <div>
          <Header/>
          <Menu/>
          <Main/>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
