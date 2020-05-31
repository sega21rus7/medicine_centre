import React from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";

class ReviewListItem extends React.Component {
  render() {
    const {item, index, isChangeable} = this.props;
    const patientUser = item.patient ? item.patient.user : {};
    const doctorUser = item.doctor ? item.doctor.user : {};

    if (item.doctor) {
      const doctorName = `${doctorUser.last_name} ${doctorUser.first_name} ${doctorUser.middle_name}`;
      var doctor = <p>Врач: {ReactHtmlParser(doctorName)}</p>
    }
    const patient = patientUser.first_name && patientUser.middle_name ?
      <h2>{patientUser.first_name}&nbsp;{patientUser.middle_name}</h2>
      : <h2>{patientUser.username}</h2>;

    return (
      <Jumbotron key={index}>
        {patient}
        {doctor}
        <div className="text-blue">Достоинства:</div>
        {
          item.positives ?
            <div>{ReactHtmlParser(item.positives)}</div>
            : null
        }
        <div className="text-blue">Недостатки:</div>
        {
          item.negatives ?
            <div>{ReactHtmlParser(item.negatives)}</div>
            : null
        }
        <div className="text-blue">Комментарий:</div>
        {ReactHtmlParser(item.content)}
        <div className="text-right">Опубликован: {item.pub_date}</div>
        {
          item.last_change_date ?
            <div className="text-right">Изменен: {item.last_change_date}</div>
            : null
        }
        {
          isChangeable ?
            <Button as={Link} to={'/lk/review/' + item.pk} variant="outline-secondary">Изменить</Button>
            : null
        }

      </Jumbotron>
    )
  };
}

export default ReviewListItem;
