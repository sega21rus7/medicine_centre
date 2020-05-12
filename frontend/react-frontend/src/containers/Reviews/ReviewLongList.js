import React from 'react';
import ReviewList from "./ReviewList";


class ReviewLongList extends React.Component {
  render() {
    const {personalUrl, personalTitle, isNotMt4} = this.props;

    return (
      <div className="ReviewLongList">
        <ReviewList isPaginated={true}
                    personalUrl={personalUrl}
                    personalTitle={personalTitle}
                    isNotMt4={isNotMt4}/>
      </div>
    )
  };
}

export default ReviewLongList;
