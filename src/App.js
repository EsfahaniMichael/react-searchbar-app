import "./App.css";
import { React, useState, useRef, useEffect } from "react";
import Searchbar from "../src/searchbar/searchbar";
import Masonry from 'react-masonry-css';

const breakpointObject = { default: 4, 3000: 6, 2000: 5, 1200:3, 1000:2, 500: 1, };


function App() {
  const [imageList, updateImageList] = useState([]);
  //imageList is an array of image urls
  console.log("App! ",imageList);
  return (
    <div className="App">
      <div className="headerWindow">
        <h3>Search <span style={{color:"#26a69a"}}>IQ!</span></h3>
      </div>
      <div className="searchBarWindow">
        <Searchbar updateImage={updateImageList}/>
      </div>
      <div className="imageWindow">
       <Masonry style={{display:"flex"}} breakpointCols={breakpointObject}>
       {imageList.map((image, index) => {
        return (<img key={index} className="imageBlock" src={image} alt={`This is the ${index} image`}/>)
       })
       }
       </Masonry>
      </div>
    </div>
  );
}

export default App;
