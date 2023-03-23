import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.png";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState("top");
  const [showSearch, setShowSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openMobileMenuHandler = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const openSearchHandler = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (path) => {
    if (path === "movies") {
      navigate("/explore/movie");
    }

    if (path === "tvshows") {
      navigate("/explore/tv");
    }

    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobile_view" : " "} ${show} `}>
      <ContentWrapper>
        <div
          className="logo"
          onClick={() => {
            navigate("/");
            setMobileMenu(false);
            setShowSearch(false);
          }}
        >
          <img src={logo} alt="logo" />
        </div>

        <ul className="menu_items">
          <li className="menu_item" onClick={() => navigationHandler("movies")}>
            Movies
          </li>
          <li
            className="menu_item"
            onClick={() => navigationHandler("tvshows")}
          >
            Tv Shows
          </li>
          <li className="menu_item">
            <HiOutlineSearch
              className="search_icon"
              onClick={openSearchHandler}
            />
          </li>
        </ul>

        <div className="mobile_menu_items">
          <HiOutlineSearch onClick={openSearchHandler} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenuHandler} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="search_bar">
          <ContentWrapper>
            <div className="search_input">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
