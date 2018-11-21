import React, { Component } from 'react';
import Header2 from './Compon/Header2';
import Content2 from './Compon/Content2';
import Footer2 from './Compon/Footer2';
// import Content from './components/Content';
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
<Header2 />
<Content2 />
<Footer2 />
{/* <Content /> */}
      </div>
    );
  }
}

export default App;
