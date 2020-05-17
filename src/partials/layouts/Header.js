import React from 'react';
import NavToggle from "./NavToggle";

class Header extends React.Component {
  render() {
    return (
      <header className="site-header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
        <h1>Header</h1>
        <NavToggle />
      </header>
    );
  }
}

export default Header;
