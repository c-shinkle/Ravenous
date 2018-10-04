import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/BusinessList/BusinessList';
import './components/SearchBar/SearchBar'
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList /> 
      </div>      
    );
  }
}

export default App;
