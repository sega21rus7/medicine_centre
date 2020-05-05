import React from 'react';
import {Link} from "react-router-dom";


class ArticleTagList extends React.Component {
  render() {
    const {tags} = this.props;

    return (
      <span>
        &nbsp;
        {tags.map((tag, tag_index) => (
          <span key={tag_index}>
            <Link to={'tag/' + tag.slug}>
              #{tag.title}
            </Link>&nbsp;
          </span>
        ))}
      </span>
    )
  };
}

export default ArticleTagList;
