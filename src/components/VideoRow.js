import React from "react";

function VideoRow({
  views,
  subs,
  description,
  publishTime,
  channel,
  title,
  thumbnail,
}) {
  return (
    <div className="videoRow">
      <div className="videoRow__thumbnail">
        <img src={thumbnail} alt="" />
      </div>

      <div className="videoRow__text">
        <h4 className="videoRow__title">{title}</h4>
        <p className="videoRow__headline">
          {channel} . <span className="videoRow__subs">{subs}</span> Subscribers{" "}
          {views} views . {publishTime}{" "}
        </p>
        <p className="videoRow__description"> {description} </p>
      </div>
    </div>
  );
}

export default VideoRow;
