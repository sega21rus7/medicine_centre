import React from 'react';
import {Link} from "react-router-dom";


class ArticleTagList extends React.Component {
  render() {
    const {tags} = this.props;
    if (tags.length === 0) {
      return null;
    }

    return (
      <span className="ArticleTagList">
        <br/>
        Теги:
        &nbsp;
        {tags.map((tag, tag_index) => (
          <span key={tag_index}>
            <Link to={'/articles_with_tag/' + tag.slug}>
              #{tag.title}
            </Link>&nbsp;
          </span>
        ))}
      </span>
    )
  };
}

export default ArticleTagList;
