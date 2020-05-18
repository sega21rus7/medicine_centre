import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import LkRouter from "../../routes/lk_routes";
import LkLayout from './LkLayout';

class Lk extends React.Component {
  render() {
    return (
      <div className="Lk">
        <Router>
          <LkLayout >
            <LkRouter/>
          </LkLayout>
        </Router>
      </div>
    )
  };
}

export default Lk;

