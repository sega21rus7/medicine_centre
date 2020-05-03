import React from 'react';
import './BottomPanel.css';
import {Link} from "react-router-dom";


class BottomPanel extends React.Component {
  render() {
    return (
      <div className="BottomPanel">
        <hr/>
        <div className="text-center">
          <Link className="text-small" to="/forgot_password">
            Забыли пароль?
          </Link>
        </div>
        <div className="text-center">
          <Link className="text-small" to="sign_up/">
            Еще не зарегистрированы? Вам сюда!
          </Link>
        </div>
      </div>
    )
  };
}

export default BottomPanel;
