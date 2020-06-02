import React from 'react';
import {connect} from "react-redux";
import {getFullName} from "../../methods";

class Welcome extends React.Component {
  render() {
    const {user} = this.props;
    const username = user ? getFullName(user) : null;

    return (
      <div>
        <h2 className="green-caption-left">
          Добро пожаловать {username}!
        </h2>

        <h5 className="orange-caption-left">Личный кабинет на нашем сайте поможет вам:</h5>
        <ul>
          <li>Самостоятельно записываться на приемы;</li>
          <li>Просматривать историю посещений;</li>
          <li>Задавать вопросы специалистам технической поддержки;</li>
          <li>Оставлять отзывы о работе наших врачей;</li>
          <li>и многое другое.</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.actionCreators.user,
  }
};

export default connect(mapStateToProps, null)(Welcome);
