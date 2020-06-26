import React from "react";
import PaginationComponent from "../../components/PaginationComponent";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ViewAllList from "../../components/ViewAllList/ViewAllList";
import DoctorListItem from "../../components/Doctors/DoctorListItem";
import DoctorSearchForm from "../../components/Doctors/DoctorSearchForm";
import DoctorFilterForm from "../../components/Doctors/DoctorFilterForm/DoctorFilterForm";
import SpinnerComponent from "../../components/SpinnerComponent";
import {BACKEND_URL} from "../../constants";

class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      previous: null,
      count: 0,
      items: null,
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

  getData = (page, initialUrl = `${BACKEND_URL}/rest-api/staff/doctors/`) => {
    const url = `${initialUrl}?page=${page}`;
    axios.get(url)
      .then(response => {
        this.setState({
          items: response.data.results,
          next: response.data.next,
          previous: response.data.previous,
          count: response.data.count,
        });
      })
      .then(() => {
        this.setState({
          paginateCount: Math.ceil(this.state.count / this.paginate_by)
        });
      })
  };

  render() {
    const {next, previous, items, paginateCount} = this.state;
    const {isPaginated, isNotCaption, isSearchable, isFilterable, doctorsByPostUrl, postPk} = this.props;
    const doctorsByPostSearchUrl = doctorsByPostUrl ? `${BACKEND_URL}/rest-api/staff/doctors_by_post/${postPk}/search` : null;

    if (isPaginated) {
      if (paginateCount > 1) {
        var pagination = <PaginationComponent items={items}
                                              getData={this.getData}
                                              paginateCount={paginateCount}
                                              next={next}
                                              previous={previous}
                                              specialUrl={doctorsByPostUrl}/>;
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
        {
          items ?
            <>
              <Row>
                {
                  isSearchable || isFilterable ?
                    <Col md={3} className="mb-2">
                      {
                        isSearchable ?
                          <DoctorSearchForm getData={this.getData}
                                            doctorsByPostUrl={doctorsByPostUrl}
                                            doctorsByPostSearchUrl={doctorsByPostSearchUrl}/>
                          : null
                      }
                      {
                        isFilterable ?
                          <DoctorFilterForm getData={this.getData}
                                            postFilterUrl={`${BACKEND_URL}/rest-api/staff/doctors_by_post/`}/>
                          : null
                      }
                    </Col>
                    : null
                }
                {
                  items.map((item, index) => (
                    <DoctorListItem key={index}
                                    item={item}
                                    index={index}
                                    isSearchable={isSearchable}/>
                  ))
                }
              </Row>
              {button}
              {pagination}
            </>
            : <SpinnerComponent/>
        }
      </Container>
    )
  };
}

export default DoctorList;
