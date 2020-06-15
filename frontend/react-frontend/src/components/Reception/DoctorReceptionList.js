import React from 'react';
import axios from 'axios';
import {Container, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {getFullName} from "../../methods";
import {Link} from "react-router-dom";
import PaginationComponent from "../PaginationComponent";
import {BACKEND_URL} from "../../constants";
import SpinnerComponent from "../SpinnerComponent";

class DoctorReceptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: null,
      next: null,
      previous: null,
      count: 0,
      paginateCount: 0,
    };
    this.paginate_by = 10;
  }

  componentDidMount() {
    this.getSchedule(1, this.props.specialUrl);
  }

  getSchedule = (page, specialUrl) => {
    const token = localStorage.getItem('token');
    if (token && this.props.user) {
      const pk = this.props.user.doctor;
      const url = specialUrl ? `${specialUrl}${pk}` :
        `${BACKEND_URL}/rest-api/reception/receptions_by_doctor/${pk}`;
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({
            next: res.data.next,
            previous: res.data.previous,
            count: res.data.count,
            schedule: res.data.results,
          });
        })
        .then(() => {
          this.setState({
            paginateCount: Math.ceil(this.state.count / this.paginate_by)
          });
        })
        .catch(err => {

        });
    }
  };

  render() {
    const {schedule, next, previous, paginateCount} = this.state;
    const {specialUrl} = this.props;

    return (
      <Container className="DoctorReceptionList">
        {
          schedule ?
            <>
              <Table bordered responsive>
                <thead>
                <tr>
                  <th>Врач</th>
                  <th>Кабинет</th>
                  <th>Этаж</th>
                  <th>Дата</th>
                  <th>Время</th>
                  <th>Пациент</th>
                </tr>
                </thead>
                <tbody>
                {
                  schedule ? schedule.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Link to={'/doctor/' + item.doctor.slug}>
                          {getFullName(item.doctor.user)}
                        </Link>
                      </td>
                      <td>{item.doctor.office.number}</td>
                      <td>{item.doctor.office.floor}</td>
                      <td>{item.date}</td>
                      <td>{item.from_time} - {item.to_time}</td>
                      <td>
                        {
                          item.patient ?
                            <Link to={'/lk/patient_profile/' + item.patient.user.pk}>
                              {getFullName(item.patient.user)}
                            </Link>
                            : '-'
                        }
                      </td>
                    </tr>
                  )) : null
                }
                </tbody>
              </Table>
              {
                paginateCount > 1 ?
                  <PaginationComponent items={schedule}
                                       getData={this.getSchedule}
                                       paginateCount={paginateCount}
                                       next={next}
                                       previous={previous}
                                       specialUrl={specialUrl}/>
                  : null
              }
            </>
            : <SpinnerComponent/>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
};

export default connect(mapStateToProps, null)(DoctorReceptionList);
