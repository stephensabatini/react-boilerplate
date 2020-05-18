import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <nav className="main-navigation" role="navigation" aria-label="Main">
        <ul>
          <li>
            <Link to="/" onClick={this.hideNav.bind(this)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={this.hideNav.bind(this)}>About</Link>
          </li>
        </ul>
      </nav>
    );
  }

  /**
   * When the user navigates to a new page, close the navigation and update
   * the aria-expanded attribute to reflect the new state.
   */
  hideNav() {
    let nav = document.getElementsByTagName('body')[0];
    nav.classList.remove('main-navigation-open');
    return this.setState({expanded: false});
  }
}

export default Nav;
