import React from 'react';
import Nav from '../layouts/Nav';

class NavToggle extends Nav {
  render() {
    return (
      <button id="main-navigation-toggle" className="main-navigation-toggle" aria-label="Open Navigation" aria-controls="main-navigation" aria-expanded={this.state.expanded} onClick={this.toggle.bind(this)}>
        <span aria-hidden="true">&#9776;</span>
      </button>
    );
  }

  toggle() {
    let nav = document.getElementsByTagName("body")[0];
    nav.classList.toggle('main-navigation-open');
    if (this.state.expanded) {
      return this.setState({expanded: false});
    } else {
      return this.setState({expanded: true});
    }
  }
}

export default NavToggle;
