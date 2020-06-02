import React from 'react';
import {Button, Col, Container, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import PaginationComponent from "../PaginationComponent";
import {connect} from "react-redux";
import {getFullName} from "../../methods";
import * as actions from "../../store/actions/make_appoinment/actionCreators";
import DoctorFilterForm from "../Doctors/DoctorFilterForm/DoctorFilterForm";

class ReceptionList extends React.Component {
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
    this.props.setTabActiveValue('my');
    this.getSchedule(1, this.props.specialUrl);
  }

  getSchedule = (page, specialUrl) => {
    const token = localStorage.getItem('token');
    if (token && this.props.user) {
      const pk = this.props.user.patient;
      let url = specialUrl ? specialUrl :
        `http://localhost:8000/reception/api/receptions_by_patient/${pk}`;
      url = `${url}?page=${page}`;
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
          console.log(res.data.results);
        })
        .then(() => {
          this.setState({
            paginateCount: Math.ceil(this.state.count / this.paginate_by)
          });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  sendReceptionRequest(event, patient) {
    const token = localStorage.getItem('token');
    if (token && this.props.user) {
      const target = event.target;
      const pk = target.getAttribute('pk');
      const url = `http://localhost:8000/reception/api/receptions/${pk}/`;
      const options = {
        method: 'PUT',
        url: url,
        data: {
          patient: patient || null,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then((res) => {
          console.log(res.data);
          this.redirectAfterReceptionRequest();
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }

  redirectAfterReceptionRequest = () => {
    if (this.props.tabActiveValue === 'my')
      this.props.history.push('/lk/make_appointment/free');
    else
      this.props.history.push('/lk/make_appointment/my');
  };

  doReception = (event) => {
    this.sendReceptionRequest(event, this.props.user.patient);
  };

  cancelReception = (event) => {
    this.sendReceptionRequest(event);
  };

  render() {
    const {schedule, next, previous, paginateCount} = this.state;
    const {user, specialUrl} = this.props;

    return (
      <Container className="ReceptionList">
        {
          specialUrl ?
            <Col md={3}>
              <DoctorFilterForm getData={this.getSchedule}
                                specialUrl={specialUrl}
                                postFilterUrl={'http://localhost:8000/reception/api/free_receptions_by_post/'}/>
            </Col>
            : null
        }


        <Table bordered>
          <thead>
          <tr>
            <th>Врач</th>
            <th>Кабинет</th>
            <th>Этаж</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Пациент</th>
            <th>Запись</th>
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
                  <td>{item.patient ? getFullName(item.patient.user) : '-'}</td>
                  <td>
                    {
                      item.patient && user.pk === item.patient.user.pk ?
                        <Button variant="outline-danger"
                                pk={item.pk}
                                onClick={this.cancelReception}>Отменить</Button>
                        :
                        <Button variant="outline-success"
                                pk={item.pk}
                                onClick={this.doReception}>Записаться</Button>
                    }
                  </td>
                </tr>
              )) :
              <tr>
                <td>Нет приемов для записи. Убедитесь в правильности выбора фильтра.</td>
              </tr>
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
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    tabActiveValue: state.makeAppointment.tabActiveValue,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceptionList);
