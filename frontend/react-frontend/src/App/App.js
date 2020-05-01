import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "../MainPage/Header/Header";
import {Route, Switch} from "react-router";
import Lk from "../Lk/Lk";
import NewsList from "../Lists/NewsList/NewsList";
import DoctorList from "../Lists/DoctorList/DoctorList";
import ArticleList from "../Lists/ArticleList/ArticleList";
import Contacts from "../Contacts/Contacts";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../MainPage/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import Content from "../MainPage/Content/Content";
import Error404 from "../Error404/Error404";
import NewsDetail from "../ListDetails/NewsDetail/NewsDetail";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Content}/>
            <Route path="/lk" component={Lk}/>
            <Route path="/news" component={NewsList}/>
            <Route path='/new/:slug' component={NewsDetail}/>
            <Route path="/doctors" component={DoctorList}/>
            <Route path="/articles" component={ArticleList}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/about_us" component={AboutUs}/>
            <Route component={Error404}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  };
}

export default App;

