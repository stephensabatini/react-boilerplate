import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <main className="site-main" role="main" itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/WebPageElement">
        <article className="site-main-inner">
          {this.props.children}
        </article>
      </main>
    );
  }
}

export default Main;
