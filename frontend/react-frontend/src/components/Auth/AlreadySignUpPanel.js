import React from 'react';
import {Link} from "react-router-dom";


class AlreadySignUpPanel extends React.Component {
  render() {
    return (
      <div className="AlreadySignUpPanel">
        <hr/>
        <div className="text-center">
          <Link className="text-small" to="/forgot_password">
            Забыли пароль?
          </Link>
        </div>
        <div className="text-center">
          <Link className="text-small" to="sign_in/">
            Уже есть аккаунт? Войдите!
          </Link>
        </div>
      </div>
    )
  };
}

export default AlreadySignUpPanel;
