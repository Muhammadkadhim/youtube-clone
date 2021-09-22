import React from "react";

// import components
import SidebarRow from "./SidebarRow";

// icons
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ExploreSharpIcon from "@mui/icons-material/ExploreSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Home"
        icon={<HomeSharpIcon className="sidebarRowIcon" />}
      />
      <SidebarRow
        title="Explore"
        icon={<ExploreSharpIcon className="sidebarRowIcon" />}
      />
      <SidebarRow
        title="Subscription"
        icon={<SubscriptionsSharpIcon className="sidebarRowIcon" />}
      />
      <SidebarRow
        title="Library"
        icon={<VideoLibrarySharpIcon className="sidebarRowIcon" />}
      />
    </div>
  );
}

export default Sidebar;
