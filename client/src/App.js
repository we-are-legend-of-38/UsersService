import React, { Component } from 'react';
import Form from './components/Form';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to React Boiler Plate</h1>
        <Form />
        <Users />
      </div>
    )
  }
}
export default App; 
