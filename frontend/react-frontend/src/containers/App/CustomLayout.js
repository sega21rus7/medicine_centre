import React, {Component} from 'react'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

class CustomLayout extends Component {
  render() {
    return (
      <div>
        <Header isAuthenticated={this.props.isAuthenticated}/>
        <div className="Content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default CustomLayout;
