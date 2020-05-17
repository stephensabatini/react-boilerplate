import React from 'react';
import Header from '../layouts/Header';
import Nav from '../layouts/Nav';
import Content from '../layouts/Content';
import Sidebar from '../layouts/Sidebar';

class Page extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Nav />
        <Content>
          {this.props.children}
          <Sidebar />
        </Content>
      </>
    );
  }
}

export default Page;
