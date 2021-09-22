import React from "react";

function navRow({ title, icon }) {
  return (
    <div className="navbarRow">
      {icon}
      <h2 className="navbarRowTitle">{title}</h2>
    </div>
  );
}

export default navRow;
