import React from 'react';
import {Alert, Button, Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";

class SupportQuestionListItem extends React.Component {
  render() {
    const {item, index, isChangeable} = this.props;

    return (
      <Jumbotron key={index}>
        {ReactHtmlParser(item.content)}
        <div className="text-right">Опубликовано: {item.pub_date}</div>
        {
          item.last_change_date ?
            <div className="text-right">Изменено: {item.last_change_date}</div>
            : null
        }
        {
          item.answer ?
            <p><h5>Ответ от администрации:</h5> {ReactHtmlParser(item.answer)}</p>
            : null
        }
        {
          isChangeable && !item.answer ?
            <Button as={Link} to={'/lk/support_question/' + item.pk} variant="outline-secondary">Изменить</Button>
            :
            <Alert variant="danger">
              Данное обращение нельзя изменить, т.к. администратор уже ответил на ваш вопрос.
              <br/>
              Пожалуйста создайте новое!
            </Alert>

        }
      </Jumbotron>
    )
  };
}

export default SupportQuestionListItem;
