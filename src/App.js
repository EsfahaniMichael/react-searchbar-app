import "./App.css";
import { React, useState, useRef, useEffect } from "react";
import Searchbar from "../src/searchbar/searchbar";

function App() {
  const [imageList, updateImageList] = useState([]);

  //imageList is an array of image urls
  console.log("App! ",imageList);
  return (
    <div className="App">
      <div className="headerWindow container">
        <h3>SearchBar!</h3>
      </div>
      <div className="searchBarWindow container">
        <Searchbar updateImage={updateImageList}/>
      </div>
      <div className="imageWindow container">
       {imageList.map((image, index) => {
        return (<img key={index} className="imageBlock" src={image} alt={`This is the ${index} image`}/>)
       })
       }
      </div>
    </div>
  );
}

export default App;
