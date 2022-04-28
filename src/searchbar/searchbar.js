import { React, useState, useRef, useEffect } from "react";
import queryImage from "../lib/api";
import "./searchcss.css";

function Searchbar({updateImage}) {
    const [query, updateQuery] = useState("");
    console.log(query)

    const searchApi = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
        let queryResponse = await queryImage(query);
        console.log('query response ', queryResponse);
        updateImage(queryResponse)
    }

  return (
    <>
      <form onSubmit={searchApi}>
        <input style={{color:"black"}} type="text" placeholder="Search Images" value={query}
    onChange={(e) => updateQuery(e.target.value)}/>
        <button
          type="submit"
          value="Submit"
          className="waves-effect waves-light btn"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default Searchbar;
