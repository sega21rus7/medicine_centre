import React from "react";
import {Route, Switch} from "react-router-dom";
import Lk from "./containers/Lk";
import NewsLongList from "./containers/News/NewsLongList";
import NewsDetail from "./components/News/NewsDetail";
import DoctorLongList from "./containers/Doctors/DoctorLongList";
import DoctorDetail from "./components/Doctors/DoctorDetail/DoctorDetail";
import ArticleLongList from "./containers/Articles/ArticleLongList";
import ArticleDetail from "./components/Articles/ArticleDetail";
import TagDetail from "./components/Tags/TagDetail";
import Contacts from "./containers/Contacts";
import AboutUs from "./containers/AboutUs";
import SignUp from "./containers/Auth/SignUp";
import SignIn from "./containers/Auth/SignIn";
import VerifyEmail from "./containers/Auth/VerifyEmail";
import Error404 from "./containers/Error404";
import Content from "./containers/Content/Content";
import ResetPassword from "./containers/Auth/ResetPassword";
import ResetPasswordDone from "./containers/Auth/ResetPasswordDone";
import ReviewLongList from "./containers/Reviews/ReviewLongList";
import DoctorPost from "./containers/Doctors/DoctorPost";

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Content}/>
      <Route exact path="/lk" component={Lk}/>
      <Route exact path="/reviews" component={ReviewLongList}/>
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
      <Route exact path="/verify_email/:key" component={VerifyEmail}/>
      <Route exact path="/doctor_post/:pk" component={DoctorPost}/>
      <Route component={Error404}/>
    </Switch>
  </div>
);

export default BaseRouter;
