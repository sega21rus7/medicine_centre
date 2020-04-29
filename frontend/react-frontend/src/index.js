import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./Header/Header";
import Lk from "./Lk/Lk";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

ReactDOM.render(
  <Router>
    <Header/>    {/*<Route component={Header}/>*/}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/lk" component={Lk}/>
      </Switch>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
