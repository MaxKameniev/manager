import React, { Component } from 'react';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Main from './pages/Main';
import ContextProvider from '../src/Context/Context';
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
