import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "../Content/Content";


class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Content/>
      </div>
    )
  };
}

export default Home;

