import React, { Component } from 'react';
import Form from './components/Form';
import Users from './components/Users';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchComponent/SearchComponent';

class App extends Component {
  render() {
    return (
      <div className="user-container">
        <Users />
        <SearchBar />
        <Dropdown />
        <Form />
      </div>
    )
  }
}
export default App; 
