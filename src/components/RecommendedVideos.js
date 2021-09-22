import React, { useState, useEffect } from "react";
import axios from "axios";
import viewCountFormatter from "./viewCountFormatter";

// import components
import VideoCard from "./VideoCard";

function RecommendedVideos({ navOpen }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((data) => {
        setApiData(data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`recommendedVideos scroll ${navOpen ? "nav-open" : ""}`}>
      <div className="recommendedVideos__videos ">
        {apiData.map((item, index) => {
          return (
            <VideoCard
              key={index}
              thumbnail={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              channelName={item.snippet.channelTitle}
              views={viewCountFormatter(item.statistics.viewCount)}
              timestamp={item.snippet.publishedAt}
              navOpen={navOpen}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;
