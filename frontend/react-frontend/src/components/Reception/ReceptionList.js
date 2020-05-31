import React from 'react';
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import PaginationComponent from "../PaginationComponent";
import {connect} from "react-redux";
import {getFullName} from "../../methods";

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
    this.paginate_by = 3;
  }

  componentDidMount() {
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
        })
        .catch(err => {
          console.log(err.response);
        });
    }
    this.getSchedule(1, this.props.specialUrl);
  }

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
        <Table bordered>
          <thead>
          <tr>
            <th>Врач</th>
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
                  <td>
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
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(ReceptionList);
