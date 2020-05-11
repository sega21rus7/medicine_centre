import React from 'react';
import {Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class SupportQuestionListItem extends React.Component {
  render() {
    const {item, index} = this.props;

    return (
      <Jumbotron key={index}>
        {ReactHtmlParser(item.content)}
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
