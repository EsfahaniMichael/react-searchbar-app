import './App.css';
import { React, useState, useRef, useEffect } from "react";
import Searchbar from '../src/searchbar/searchbar'

function App() {
  return (
    <div className="App">
      <div className="headerWindow container">
        <h3>Search Bar Web App</h3>
      </div>
      <div className="searchBarWindow container">
        <Searchbar/>
      </div>
      <div className="imageWindow container">

      </div>
    </div>
  );
}

export default App;
