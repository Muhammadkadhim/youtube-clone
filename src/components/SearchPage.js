import React, { useState, useEffect } from "react";
import axios from "axios";

// icons
import TuneSharpIcon from "@mui/icons-material/TuneSharp";

// components
import VideoRow from "./VideoRow";

function SearchPage({ navOpen, searchTerm }) {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((data) => {
        setSearchData(data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  return (
    <div className={`searchPage ${navOpen ? "nav-open" : ""}`}>
      <div className="searchPage__filter">
        <TuneSharpIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />

      <div className="search__results">
        {searchData.map((item, index) => {
          return (
            <VideoRow
              key={index}
              title={item.snippet.title}
              description={item.snippet.description}
              publishTime={item.snippet.publishTime}
              thumbnail={item.snippet.thumbnails.medium.url}
              channel={item.snippet.channelTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
