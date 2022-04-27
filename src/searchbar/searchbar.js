import { React, useState, useRef, useEffect } from "react";




const Searchbar = () => (
    <form action="/" method="get">
        <input
            type="text"
            placeholder="Search Images"
        />
        <button type="submit" value="Submit" className="waves-effect waves-light btn">Search</button>
    </form>
);

  export default Searchbar;