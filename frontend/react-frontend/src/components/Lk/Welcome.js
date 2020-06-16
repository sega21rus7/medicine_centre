import React from 'react';
import {getFullName} from "../../methods";
import {connect} from "react-redux";

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
        {
          user && user.patient ?
            <ul>
              <li>Самостоятельно записываться на приемы;</li>
              <li>Просматривать историю посещений;</li>
              <li>Редактировать профиль;</li>
              <li>Задавать вопросы специалистам технической поддержки;</li>
              <li>Оставлять отзывы о работе наших врачей;</li>
              <li>Для того, чтобы вы могли оставить отзыв, доктору необходимо подтвердить ваше присутствие на приеме, тогда прием будет пройден.</li>
            </ul> :
            <ul>
              <li>Составлять и просматривать ваш график работы;</li>
              <li>Задавать вопросы специалистам технической поддержки;</li>
              <li>Редактировать профиль;</li>
              <li>Видеть отзывы пациентов о вашей работе;</li>
              <li>Для того, чтобы пациент мог оставить отзыв, вам необходимо подтвердить его присутствие на приеме, тогда прием будет пройден.</li>
            </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
};

export default connect(mapStateToProps, null)(Welcome);
