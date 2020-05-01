import React from 'react';
import './PaginationComponent.css';
import {Pagination} from "react-bootstrap";


class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginateCount: 0,
      getData: null,
      activePage: 1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      getData: props.getData,
      paginateCount: props.paginateCount,
    }
  };

  getPaginationPages = () => {
    let pagination = [];
    for (let i = 0; i < this.state.paginateCount; i++) {
      pagination[i] = i + 1;
    }
    return pagination;
  };

  paginate = event => {
    // console.log(event.target.getAttribute('value'));
    const page = event.target.getAttribute('value') ||
      event.target.parentElement.getAttribute('value');
    this.setState({activePage: Number(page)}, () => {
      this.state.getData(page);
    });
  };

  render() {
    const {activePage, paginateCount} = this.state;
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
