import React from 'react';
import './CommentList.css';
import {Container} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class CommentList extends React.Component {
  render() {
    const {comments} = this.props;
    const count = Object.keys(comments).length;
    return (
      <Container className="CommentList mt-2">
        <h3 className="comment-title">Комментарии ({count})</h3>
        <ul className="media-list">
          {comments.map((item, index) => (
            <li key={index} className="media">
              <div className="media-left">
                <img className="media-object" src={item.user ? item.user.avatar : ''}
                     alt="Фото"/>
              </div>
              <div className="media-body">
                <div className="media-heading">
                  <div className="comment-author">
                    {item.user ? `${item.user.last_name} ${item.user.first_name} ${item.user.middle_name}` : ''}
                  </div>
                  <div className="metadata">
                    <span className="date">{item.pub_date}</span>
                  </div>
                </div>
                <div className="media-text text-justify">
                  {item.content}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    )
  }
}

export default CommentList;
