import React from 'react';
import Menu from '../components/comons/Menu';

import '../App.css';
import logo from '../logo.svg';

function HomeView() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} alt="Logo" width="100"/>GraphQL</h1>
        <Menu />
      </header>
    </div>
  );
}
export default HomeView;
