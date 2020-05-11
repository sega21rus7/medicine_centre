import React from 'react';
import ReviewList from "./ReviewList";


class ReviewLongList extends React.Component {
  render() {
    return (
      <div className="ReviewLongList">
        <ReviewList isPaginated={true}/>
      </div>
    )
  };
}

export default ReviewLongList;
