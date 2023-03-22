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

  return (
    <header className="header">
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="menu_items">
          <li className="menu_item">Movies</li>
          <li className="menu_item">Tv Shows</li>
          <li className="menu_item">
            <HiOutlineSearch className="search_icon" />
          </li>
        </ul>

        <div className="mobile_menu_items">
          <HiOutlineSearch />
          {mobileMenu ? <VscChromeClose /> : <SlMenu />}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
