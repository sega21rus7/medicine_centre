import React from 'react';
import './NewsList.css';
import CommonList from "../CommonList/CommonList";


class NewsList extends React.Component {
  render() {
    return (
      <div className="NewsList">
        <CommonList title={'Новости'}
                    url='http://localhost:8000/news/api/news'
                    kind={'news'}
        />
      </div>
    )
  };
}

export default NewsList;
