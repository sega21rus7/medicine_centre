import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "../MainPage/Header/Header";
import Lk from "../Lk/Lk";
import Contacts from "../Contacts/Contacts";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../MainPage/Footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Content from "../MainPage/Content/Content";
import Error404 from "../Error404/Error404";
import NewsDetail from "../ListDetails/NewsDetail/NewsDetail";
import ArticleDetail from "../ListDetails/ArticleDetail/ArticleDetail";
import DoctorDetail from "../ListDetails/DoctorDetail/DoctorDetail";
import TagDetail from "../ListDetails/TagDetail/TagDetail";
import SignUp from "../Auth/SignUp/SignUp";
import SignIn from "../Auth/SignIn/SignIn";
import VerifyEmail from "../Auth/VerifyEmail/VerifyEmail";
import SignOut from "../Auth/SignOut/SignOut";
import NewsList from "../Lists/News/NewsList";
import DoctorList from "../Lists/Doctors/DoctorList";
import ArticleLongList from "../Lists/Articles/ArticleLongList";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Content}/>
            <Route exact path="/lk" component={Lk}/>
            <Route exact path="/news" component={NewsList}/>
            <Route exact path='/new/:slug' component={NewsDetail}/>
            <Route exact path="/doctors" component={DoctorList}/>
            <Route exact path="/doctor/:slug" component={DoctorDetail}/>
            <Route exact path="/articles" component={ArticleLongList}/>
            <Route exact path="/article/:slug" component={ArticleDetail}/>
            <Route exact path="/tag/:slug" component={TagDetail}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/about_us" component={AboutUs}/>
            <Route exact path="/sign_up" component={SignUp}/>
            <Route exact path="/sign_in" component={SignIn}/>
            <Route exact path="/sign_out" component={SignOut}/>
            <Route exact path="/verify-email/:key" component={VerifyEmail}/>
            <Route component={Error404}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  };
}

export default App;

