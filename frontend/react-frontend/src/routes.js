import React from "react";
import {Route, Switch} from "react-router-dom";
import Lk from "./containers/Lk";
import NewsLongList from "./containers/News/NewsLongList";
import NewsDetail from "./components/NewsDetail";
import DoctorLongList from "./containers/Doctors/DoctorLongList";
import DoctorDetail from "./components/DoctorDetail";
import ArticleLongList from "./containers/Articles/ArticleLongList";
import ArticleDetail from "./components/ArticleDetail";
import TagDetail from "./components/TagDetail";
import Contacts from "./containers/Contacts";
import AboutUs from "./containers/AboutUs";
import SignUp from "./containers/Auth/SignUp";
import SignIn from "./containers/Auth/SignIn";
import VerifyEmail from "./containers/Auth/VerifyEmail";
import Error404 from "./containers/Error404";
import Content from "./containers/Content/Content";
import ResetPassword from "./containers/Auth/ResetPassword";
import ResetPasswordDone from "./containers/Auth/ResetPasswordDone";

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
      <Route exact path="/reset_password" component={ResetPassword}/>
      <Route exact path="/reset_password_done/:uid/:token" component={ResetPasswordDone}/>
      <Route exact path="/verify-email/:key" component={VerifyEmail}/>
      <Route component={Error404}/>
    </Switch>
  </div>
);

export default BaseRouter;
