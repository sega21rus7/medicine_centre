import React from 'react';
import './PaginationComponent.css';
import {Pagination} from "react-bootstrap";


class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  getPaginationPages = () => {
    let pagination = [];
    for (let i = 0; i < this.props.paginateCount; i++) {
      pagination[i] = i + 1;
    }
    return pagination;
  };

  paginate = event => {
    // console.log(event.target.getAttribute('value'));
    const page = event.target.getAttribute('value') ||
      event.target.parentElement.getAttribute('value');
    this.setState({activePage: Number(page)}, () => {
      this.props.getData(page);
    });
  };

  render() {
    const {activePage} = this.state;
    const {paginateCount} = this.props;
    const pagination = this.getPaginationPages();

    return (
      <Pagination>
        <Pagination.First
          onClick={this.paginate}
          value={1}
        />
        {pagination.map((item, index) => {
            const isActive = item === this.state.activePage;
            return (
              <Pagination.Item onClick={this.paginate}
                               key={index} value={item}
                               active={isActive}>
                {item}
              </Pagination.Item>
            )
          }
        )}
        <Pagination.Last onClick={this.paginate}
                         value={pagination.length}
        />
      </Pagination>
    )
  };
}

export default PaginationComponent;
