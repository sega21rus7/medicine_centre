import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import CustomLayout from "../containers/CustomLayout";
import BaseRouter from "../routes";
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth'

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter/>
          </CustomLayout>
        </Router>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

