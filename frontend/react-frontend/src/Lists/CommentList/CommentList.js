import React from 'react';
import './CommentList.css';
import {Container} from "react-bootstrap";
import axios from "axios";


class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      count: 0,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/news/api/comments/')
      .then(response => {
        this.setState({
          comments: response.data,
          count: Object.keys(response.data).length
        });
        console.log(response.data);
      })
  }

  render() {
    const {comments, count} = this.state;
    return (
      <Container className="CommentList">
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
                  <div className="comment-author">{item.user ? item.user.username : ''}</div>
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
