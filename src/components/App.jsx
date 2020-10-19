import React from 'react';
import Menu from './Menu.jsx'


export default class App extends React.Component {
  render() {
    return <React.Fragment>
      <p id="top-banner">Combat Capitol</p>
      <Menu />
    </React.Fragment>
  }
}

