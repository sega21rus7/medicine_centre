import React from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";

class ReviewListItem extends React.Component {
  render() {
    const {item, index, isChangeable} = this.props;
    const user = item.patient.user;

    if (item.doctor) {
      const doctorName = `${item.doctor.user.last_name} ${item.doctor.user.first_name} ${item.doctor.user.middle_name}`;
      var doctor = <p>Врач: {ReactHtmlParser(doctorName)}</p>
    }

    return (


      <Jumbotron key={index}>
        <h2>{user.first_name}&nbsp;{user.middle_name}</h2>
        {doctor}
        {
          item.negatives ?
            <div>Достоинства: {ReactHtmlParser(item.negatives)}</div>
            : null
        }
        {
          item.positives ?
            <div>Недостатки: {ReactHtmlParser(item.positives)}</div>
            : null
        }
        <div>Комментарий:</div> {ReactHtmlParser(item.content)}
        <div className="text-right">Дата публикации<br/>{item.pub_date}</div>
        {
          item.last_change_date ?
            <div className="text-right">Последнее изменение<br/>{item.last_change_date}</div>
            : null
        }
        {
          isChangeable ?
            <Button as={Link} to={'lk/user_review/' + item.pk} variant="outline-secondary">Изменить</Button>
            : null
        }

      </Jumbotron>
    )
  };
}

export default ReviewListItem;
