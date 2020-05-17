import React from 'react';

class Button extends React.Component {
  render() {
    const href = this.props.href;
    const label = this.props.label;
    if (href.length > 0 && label.length > 0) {
      return (
        <a className="btn" href={href}>{label}</a>
      );
    } else if (href.length > 0) {
      return (
        <a className="btn" href={href}>{href}</a>
      );
    } else if (label.length > 0) {
      return (
        <button type="button" className="btn">{label}</button>
      );
    }
  }
}

export default Button;
