import React from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {getFullName} from "../../methods";
import {Link} from "react-router-dom";

class ReviewListItem extends React.Component {
  render() {
    const {item, index, isChangeable} = this.props;

    return (
      <Jumbotron key={index}>
        <div>
          <span className="text-blue">Пациент:</span> {item.patient ? getFullName(item.patient.user) : null}
        </div>
        <div>
          <span className="text-blue">Врач:</span> {item.doctor ? getFullName(item.doctor.user) : null}
        </div>
        {
          item.positives ?
            <>
              <div className="text-blue">Достоинства:</div>
              <div>{ReactHtmlParser(item.positives)}</div>
            </> : null
        }
        {
          item.negatives ?
            <>
              <div className="text-blue">Недостатки:</div>
              <div>{ReactHtmlParser(item.negatives)}</div>
            </> : null
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
