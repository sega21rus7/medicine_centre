import React from 'react';
import NewsList from "./NewsList";

class NewsShortList extends React.Component {
  render() {
    return (
      <div className="NewsShortList">
        <NewsList isPaginated={false}
                  isSearchable={false}/>
      </div>
    )
  };
}

export default NewsShortList;
