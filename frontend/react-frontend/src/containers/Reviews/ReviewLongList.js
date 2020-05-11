import React from 'react';
import ReviewList from "./ReviewList";


class ReviewLongList extends React.Component {
  render() {
    const {personalUrl, personalTitle} = this.props;

    return (
      <div className="ReviewLongList">
        <ReviewList isPaginated={true}
                    personalUrl={personalUrl}
                    personalTitle={personalTitle}/>
      </div>
    )
  };
}

export default ReviewLongList;
