import React, { Component } from 'react';
import Form from './components/Form';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div>
        <Users />
        <Form />
      </div>
    )
  }
}
export default App; 
