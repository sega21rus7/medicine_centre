import React from 'react';
import {Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class ReviewListItem extends React.Component {
  render() {
    const {item, index} = this.props;
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
            <p>Достоинства: {ReactHtmlParser(item.negatives)}</p>
            : null
        }
        {
          item.positives ?
            <p>Недостатки: {ReactHtmlParser(item.positives)}</p>
            : null
        }
        <p>Комментарий: {ReactHtmlParser(item.content)}</p>

        <div className="text-right">Дата публикации: {item.pub_date}</div>
      </Jumbotron>
    )
  };
}

export default ReviewListItem;
