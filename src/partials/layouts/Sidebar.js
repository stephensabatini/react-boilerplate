import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="site-sidebar" itemscope itemtype="https://schema.org/WPSidebar">
        <div className="site-sidebar-inner">
          Side contents
        </div>
      </aside>
    );
  }
}

export default Sidebar;
