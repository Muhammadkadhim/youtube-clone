import React from "react";

// icons
import Avatar from "@mui/material/Avatar";

function VideoCard({
  thumbnail,
  title,
  channelName,
  views,
  timestamp,
  navOpen,
}) {
  return (
    <div className={`videoCard ${navOpen ? "nav-open" : ""}`}>
      <img
        src={thumbnail}
        alt="thumbnail"
        className={`videoCard__thumbnail ${navOpen ? "nav-open" : ""}`}
      />
      <div className="videoCard__info">
        <div className="videoCard__avatar">
          <Avatar alt="remy sharp" className="avatar" />
        </div>
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
