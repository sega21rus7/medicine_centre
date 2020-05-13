import React from 'react';
import NewsList from "./NewsList";


class NewsLongList extends React.Component {
  render() {
    return (
      <div className="NewsLongList">
        <NewsList isPaginated={true}
                  isSearchable={true}/>
      </div>
    )
  };
}

export default NewsLongList;
