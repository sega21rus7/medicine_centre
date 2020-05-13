import React from "react";
import PaginationComponent from "../../components/PaginationComponent";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ViewAllList from "../../components/ViewAllList/ViewAllList";
import DoctorListItem from "../../components/Doctors/DoctorListItem";
import DoctorSearchForm from "../../components/Doctors/DoctorSearchForm";
import DoctorFilterForm from "../../components/Doctors/DoctorFilterForm/DoctorFilterForm";
import DoctorResetForm from "../../components/Doctors/DoctorResetForm";

class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      previous: null,
      count: 0,
      items: [],
      paginateCount: 0,
    };
    this.paginate_by = 3;
    this.button = {
      text: 'Показать всех врачей',
      to: '/doctors'
    }
  }

  componentDidMount() {
    this.getData(1, this.props.specialUrl);
  }

  getData = (page, initialUrl = 'http://localhost:8000/staff/api/doctors/') => {
    const url = `${initialUrl}?page=${page}`;
    axios.get(url)
      .then(response => {
        this.setState({
          items: response.data.results,
          next: response.data.next,
          previous: response.data.previous,
          count: response.data.count,
        });
        console.log(response.data);
      })
      .then(() => {
        this.setState({
          paginateCount: Math.ceil(this.state.count / this.paginate_by)
        });
      })
  };

  render() {
    const {next, previous, items, paginateCount} = this.state;
    const {isPaginated, isNotCaption, isSearchable, isFilterable} = this.props;

    const row = this.state.items.map((item, index) => {
        return <DoctorListItem key={index}
                               item={item}
                               index={index}
                               isSearchable={isSearchable}/>;
      }
    );

    if (isPaginated) {
      if (paginateCount > 1) {
        var pagination = <PaginationComponent items={items}
                                              getData={this.getData}
                                              paginateCount={paginateCount}
                                              next={next}
                                              previous={previous}/>;
      }
    } else {
      var button = <ViewAllList button={this.button}/>;
    }

    return (
      <Container className="mt-4">
        {
          isNotCaption ? null
            : <h3 className="orange-caption-left">Наши специалисты</h3>
        }
        <Row>
          {
            isSearchable || isFilterable ?
              <Col md={3}>
                {
                  isSearchable ?
                    <DoctorSearchForm getData={this.getData}/>
                    : null
                }
                {
                  isFilterable ?
                    <DoctorFilterForm getData={this.getData}/>
                    : null
                }
                <DoctorResetForm getData={this.getData}/>
              </Col>
              : null
          }
          {row}
        </Row>
        {button}
        {pagination}
      </Container>
    )
  };
}

export default DoctorList;
