import React, { useState } from "react";

// icons
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import Avatar from "@mui/material/Avatar";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";

// router
import { Link } from "react-router-dom";

function Header({ navOpen, setNavOpen, setSearchTerm }) {
  const [inputSearch, setInputSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon className="menu" onClick={() => setNavOpen(!navOpen)} />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />

        <div className="header__inputBtn">
          <Link to={`/search/${inputSearch}`}>
            <SearchSharpIcon
              className="btn__icon__big"
              onClick={() => {
                setSearchTerm(inputSearch);
              }}
            />
          </Link>

          <SearchSharpIcon
            className="btn__icon__small"
            onClick={() => {
              setSearchOpen(!searchOpen);
            }}
          />
        </div>

        <div className="microphone">
          <MicSharpIcon />
        </div>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar alt="remy sharp" className="userImg" />
      </div>

      <div
        className={`header__input__smallScreen ${
          searchOpen ? "search-open" : ""
        }`}
      >
        <KeyboardBackspaceSharpIcon
          className="backBtn"
          onClick={() => {
            setSearchOpen(!searchOpen);
          }}
        />

        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />

        <Link to={`/search/${inputSearch}`}>
          <div className="header__inputBtn">
            <SearchSharpIcon
              className="btn__icon "
              onClick={() => {
                setSearchTerm(inputSearch);
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
