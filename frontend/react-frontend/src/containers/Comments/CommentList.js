import React from 'react';
import './CommentList.css';
import {Container} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import avatar from '../../images/custom_avatar.png';
import {getFullName} from "../../methods";

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
                <img className="media-object"
                     src={item.user ? item.user.avatar || avatar : ''}
                     alt="Аватар"/>
              </div>
              <div className="media-body">
                <div className="media-heading">
                  <div className="comment-author">
                    {getFullName(item.user)}
                  </div>
                  <div className="metadata">
                    <span className="date">{item.pub_date}</span>
                  </div>
                </div>
                <div className="media-text text-justify">
                  {ReactHtmlParser(item.content)}
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
