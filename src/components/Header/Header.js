import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
    <Link to={`/blog`}>
        <img
			src="/geekyArjun-logo@4x.png"
			alt="geekyarjun.com logo"
			srcSet="
				geekyArjun-logo@4x.png 4x,
				geekyArjun-logo@3x.png 3x,
				geekyArjun-logo@2x.png 2x,
				geekyArjun-logo@1x.png 1x
			"
        />
      </Link>
      <img
            src="/geekyArjun.com-search-icon.svg"
            alt="search icon"
            srcSet=""
            className="header__serach-icon"
      />
      <img
            src="/geekyArjun-menu-icon.svg"
            alt="menu icon"
            srcSet=""
            className="header__menu-icon"
      />
    </header>
)

export default Header;