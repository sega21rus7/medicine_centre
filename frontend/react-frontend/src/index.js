import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./MainPage/Header/Header";
import Lk from "./Lk/Lk";
import Home from "./MainPage/Home/Home";
import Footer from "./MainPage/Footer/Footer";
import NewsList from "./NewsList/NewsList";
import ArticleList from "./ArticleList/ArticleList";
import AboutUs from "./AboutUs/AboutUs";
import Contacts from "./Contacts/Contacts";
import DoctorList from "./DoctorList/DoctorList";

ReactDOM.render(
  <Router>
    <Header/> {/*<Route component={Header}/>*/}
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/lk" component={Lk}/>
      <Route path="/news" component={NewsList}/>
      <Route path="/doctors" component={DoctorList}/>
      <Route path="/articles" component={ArticleList}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/about_us" component={AboutUs}/>
    </Switch>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
