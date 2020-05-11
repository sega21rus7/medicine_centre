import React from 'react';
import ReviewList from "./ReviewList";


class ReviewLongList extends React.Component {
  render() {
    return (
      <div className="ReviewLongList">
        <ReviewList isPaginated={true} personalUrl={this.props.personalUrl}/>
      </div>
    )
  };
}

export default ReviewLongList;
