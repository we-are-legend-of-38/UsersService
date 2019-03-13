import React, { Component } from 'react';
import axios from 'axios';
import './SearchComponent.css';

class SearchBar extends Component {
  state = {
    query: '',
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
  }

  handleClick = (e) => {
    console.log('CLICKED');
    e.preventDefault();

  }

  render() {
    return (
      <form className="search-container">
        <input
          type="text"
          placeholder="Music to my ears"
          onChange={(e) => this.handleInputChange(e)}
        />
        <button type="button" onClick={e => this.handleClick(e)} ><i className="fa fa-search"></i></button>
      </form>
    );
  }
}

export default SearchBar