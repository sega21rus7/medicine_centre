import React from 'react';
import NewsList from "./NewsList";

class NewsShortList extends React.Component {
  constructor(props) {
    super(props);
    this.button = {
      text: 'Показать все новости',
      to: '/news'
    }
  }

  render() {
    return (
      <div className="NewsShortList">
        <NewsList button={this.button}/>
      </div>
    )
  };
}

export default NewsShortList;
