import React from 'react';
import Page from '../templates/Page';
import MetaTags from 'react-meta-tags';
import Main from '../layouts/Main';

class Home extends React.Component {
  render() {
    return (
      <Page>
        <MetaTags>
          <title>Home</title>
          <meta name="description" content="Some description." />
        </MetaTags>
        <Main>
          <h2>Home</h2>
          <p>Using only HTML and CSS, create the following:</p>
          <ul>
            <li>A page that has a default font size of 16px when on screen and 12pt when printed</li>
            <li>A header element that spans the entire width of the document with the following criteria:
              <ul>
                <li>Has a red background</li>
                <li>Takes up 1/5 of the available screen height</li>
                <li>Has a Level 1 heading element as its only child, with the text "Header"</li>
                <li>The header text should center vertically and have the equivalent of 10px on each side</li>
              </ul>
            </li>
            <li>A main content section with the following criteria:
              <ul>
                <li>At screen width, takes up the remaining available screen height and 2/3 of the available screen width</li>
                <li>At phone width, takes up 100% of the available screen width</li>
                <li>Should wrap these instructions</li>
                <li>Should have the equivalent of 10px of padding</li>
              </ul>
            </li>
            <li>A column of secondary content with the following criteria:
              <ul>
                <li>Contains the text "Side contents"</li>
                <li>At screen width, takes up the remaining 4/5 of available screen height and 1/3 of the available screen width, and appears to the right of the main content</li>
                <li>At phone width, takes up 80% of the screen width and appears below the main content</li>
                <li>Has a green background that is 40% transparent</li>
                <li>Should have padding equal to the section's font size</li>
                <li>Disappears when the page is printed</li>
              </ul>
            </li>
          </ul>
        </Main>
      </Page>
    );
  }
}

export default Home;
