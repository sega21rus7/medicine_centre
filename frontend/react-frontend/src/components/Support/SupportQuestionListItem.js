import React from 'react';
import {Button, Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";

class SupportQuestionListItem extends React.Component {
  render() {
    const {item, index} = this.props;

    return (
      <Jumbotron key={index}>
        {ReactHtmlParser(item.content)}
        <div className="text-right">Опубликовано: {item.pub_date}</div>
        {
          item.last_change_date ?
            <div className="text-right">Изменено: {item.last_change_date}</div>
            : null
        }
        <Button as={Link} to={'/lk/patient_support_question/' + item.pk} variant="outline-secondary">Изменить</Button>
        {
          item.answer ?
            <p><h5>Ответ от администрации:</h5> {ReactHtmlParser(item.answer)}</p>
            : null
        }
      </Jumbotron>
    )
  };
}

export default SupportQuestionListItem;
