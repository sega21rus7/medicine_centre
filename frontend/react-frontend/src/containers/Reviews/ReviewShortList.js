import React from 'react';
import ReviewList from "./ReviewList";

class ReviewShortList extends React.Component {
  render() {
    return (
      <div className="ReviewShortList">
        <ReviewList isPaginated={false}/>
      </div>
    )
  };
}

export default ReviewShortList;
