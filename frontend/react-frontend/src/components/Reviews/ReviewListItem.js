import React from 'react';
import {Jumbotron} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class ReviewListItem extends React.Component {
  render() {
    const {item, index} = this.props;
    const user = item.patient.user;

    return (
      <Jumbotron key={index}>
        <h2>{user.first_name}&nbsp;{user.middle_name.charAt(0)}.</h2>
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
      </Jumbotron>
    )
  };
}

export default ReviewListItem;
