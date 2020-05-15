import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth'
import CustomLayout from "../CustomLayout";
import BaseRouter from "../../routes";

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <div className="App">
        <Router>
          {/*{...this.props}*/}
          <CustomLayout >
            <BaseRouter/>
          </CustomLayout>
        </Router>
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
};

export default connect(null, mapDispatchToProps)(App);

