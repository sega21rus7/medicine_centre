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
    const patient = user.first_name && user.middle_name ?
      <h2>{user.first_name}&nbsp;{user.middle_name}</h2>
      : <h2>{user.username}</h2>;

    return (
      <Jumbotron key={index}>
        {patient}
        {doctor}
        <div>Достоинства:</div>
        {
          item.negatives ?
            <div>{ReactHtmlParser(item.negatives)}</div>
            : null
        }
        <div>Недостатки:</div>
        {
          item.positives ?
            <div>{ReactHtmlParser(item.positives)}</div>
            : null
        }
        <div>Комментарий:</div>
        {ReactHtmlParser(item.content)}
        <div className="text-right">Опубликован: {item.pub_date}</div>
        {
          item.last_change_date ?
            <div className="text-right">Изменен: {item.last_change_date}</div>
            : null
        }
        {
          isChangeable ?
            <Button as={Link} to={'lk/patient_review/' + item.pk} variant="outline-secondary">Изменить</Button>
            : null
        }

      </Jumbotron>
    )
  };
}

export default ReviewListItem;
