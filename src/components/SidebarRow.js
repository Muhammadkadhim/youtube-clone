import React from "react";

function SidebarRow({ title, icon }) {
  return (
    <div className="sidebarRow">
      {icon}
      <h2 className="sidebarRowTitle">{title}</h2>
    </div>
  );
}

export default SidebarRow;
