import React, {Component} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {withRouter} from "react-router-dom";

class CustomLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(CustomLayout);
