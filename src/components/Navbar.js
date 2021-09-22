import React from "react";

// import components
import NavbarRow from "./NavbarRow";

// icons
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ExploreSharpIcon from "@mui/icons-material/ExploreSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import Avatar from "@mui/material/Avatar";
import SportsEsportsSharpIcon from "@mui/icons-material/SportsEsportsSharp";
import LiveTvSharpIcon from "@mui/icons-material/LiveTvSharp";
import SportsBaseballSharpIcon from "@mui/icons-material/SportsBaseballSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import FeedbackSharpIcon from "@mui/icons-material/FeedbackSharp";

import { Link } from "react-router-dom";
function Navbar({ navOpen, setNavOpen }) {
  return (
    <div className={`navbar scroll ${navOpen ? "nav-open" : ""}`}>
      <div className="topbar">
        <MenuSharpIcon className="menu" onClick={() => setNavOpen(!navOpen)} />
        <Link to="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube    "
          />
        </Link>
      </div>
      <section className="first">
        <NavbarRow
          title={"Home"}
          icon={<HomeSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Explore"}
          icon={<ExploreSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Subscriptions"}
          icon={<SubscriptionsSharpIcon className="navbarRowIcon" />}
        />
      </section>
      <section className="second">
        <NavbarRow
          title={"Library"}
          icon={<VideoLibrarySharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"History"}
          icon={<HistorySharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Your videos"}
          icon={<OndemandVideoSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Watch later"}
          icon={<WatchLaterSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Liked videos"}
          icon={<ThumbUpSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Show more"}
          icon={<KeyboardArrowDownSharpIcon className="navbarRowIcon" />}
        />
      </section>
      <section className="third">
        <h1>Subscrptions</h1>

        <NavbarRow
          title={"Muhammad Kadhim"}
          icon={
            <Avatar className="navbarRowIcon" sx={{ width: 24, height: 24 }} />
          }
        />
        <NavbarRow
          title={"Muhammad Kadhim"}
          icon={
            <Avatar className="navbarRowIcon" sx={{ width: 24, height: 24 }} />
          }
        />
        <NavbarRow
          title={"Muhammad Kadhim"}
          icon={
            <Avatar className="navbarRowIcon" sx={{ width: 24, height: 24 }} />
          }
        />
        <NavbarRow
          title={"Muhammad Kadhim"}
          icon={
            <Avatar className="navbarRowIcon" sx={{ width: 24, height: 24 }} />
          }
        />
        <NavbarRow
          title={"Show 12 more"}
          icon={<KeyboardArrowDownSharpIcon className="navbarRowIcon" />}
        />
      </section>
      <section className="fourth">
        <h1>more from youtube</h1>
        <NavbarRow
          title={"Gaming"}
          icon={<SportsEsportsSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Live"}
          icon={<LiveTvSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Sports"}
          icon={<SportsBaseballSharpIcon className="navbarRowIcon" />}
        />
      </section>
      <section className="fifth">
        <NavbarRow
          title={"Settings"}
          icon={<SettingsSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Report history"}
          icon={<HistorySharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Help"}
          icon={<HelpSharpIcon className="navbarRowIcon" />}
        />
        <NavbarRow
          title={"Send feedback"}
          icon={<FeedbackSharpIcon className="navbarRowIcon" />}
        />
      </section>
      <section className="sixth">
        <ul>
          <li>About</li>
          <li>Press</li>
          <li>Copyright</li>
          <li>Contact us</li>
          <li>Creators</li>
          <li>Creators</li>
          <li>Advertise</li>
          <li>Developers</li>
        </ul>
        <ul>
          <li>Terms</li>
          <li>Provacy</li>
          <li>Policy {"&"} Safety</li>
          <li>How Youtube works</li>
          <li>Test new features</li>
        </ul>

        <p>© 2021 Google LLC</p>
      </section>
    </div>
  );
}

export default Navbar;
