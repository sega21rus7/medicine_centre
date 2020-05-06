import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import CustomLayout from "../containers/CustomLayout";
import BaseRouter from "../routes";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter/>
          </CustomLayout>
        </Router>
      </div>
    )
  };
}

export default App;

