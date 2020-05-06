import React from "react";
import {Route, Switch} from "react-router-dom";
import Lk from "./Lk/Lk";
import NewsLongList from "./Lists/News/NewsLongList";
import NewsDetail from "./ListDetails/NewsDetail/NewsDetail";
import DoctorLongList from "./Lists/Doctors/DoctorLongList";
import DoctorDetail from "./ListDetails/DoctorDetail/DoctorDetail";
import ArticleLongList from "./Lists/Articles/ArticleLongList";
import ArticleDetail from "./ListDetails/ArticleDetail/ArticleDetail";
import TagDetail from "./ListDetails/TagDetail/TagDetail";
import Contacts from "./Contacts/Contacts";
import AboutUs from "./AboutUs/AboutUs";
import SignUp from "./Auth/SignUp/SignUp";
import SignIn from "./Auth/SignIn/SignIn";
import SignOut from "./Auth/SignOut/SignOut";
import VerifyEmail from "./Auth/VerifyEmail/VerifyEmail";
import Error404 from "./Error404/Error404";
import Content from "./MainPage/Content/Content";

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Content}/>
      <Route exact path="/lk" component={Lk}/>
      <Route exact path="/news" component={NewsLongList}/>
      <Route exact path='/new/:slug' component={NewsDetail}/>
      <Route exact path="/doctors" component={DoctorLongList}/>
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
  </div>
);

export default BaseRouter;
