import React from 'react';
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import LkRouter from "../../routes/lk_routes";
import LkLayout from './LkLayout';
import * as actions from "../../store/actions/auth";
import {connect} from "react-redux";

class Lk extends React.Component {
  componentDidMount() {
    this.props.getUser();
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/sign_in"/>;
    }

    return (
      <div className="Lk">
        <Router>
          <LkLayout>
            <LkRouter/>
          </LkLayout>
        </Router>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (user) => dispatch(actions.getUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lk);

