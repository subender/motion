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

  return (
    <header className={`header ${mobileMenu ? "mobile_view" : " "} ${show} `}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="menu_items">
          <li className="menu_item">Movies</li>
          <li className="menu_item">Tv Shows</li>
          <li className="menu_item">
            <HiOutlineSearch
              className="search_icon"
              onClick={openSearchHandler}
            />
          </li>
        </ul>

        <div className="mobile_menu_items">
          <HiOutlineSearch />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenuHandler} />
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
