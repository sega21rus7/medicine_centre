import React from 'react';
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import PaginationComponent from "../PaginationComponent";
import {connect} from "react-redux";

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

  getFullName(user) {
    const lastName = user.last_name;
    const firstName = user.first_name;
    const middleName = user.middle_name;

    if (lastName && firstName && middleName)
      return `${lastName} ${firstName} ${middleName}`;
    return user.username;
  }

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
                      {this.getFullName(item.doctor.user)}
                    </Link>
                  </td>
                  <td>{item.work_time.date}</td>
                  <td>{item.work_time.from_time} - {item.work_time.to_time}</td>
                  <td>{item.patient ? this.getFullName(item.patient.user) : '-'}</td>
                  <td>
                    {
                      item.patient && user.pk === item.patient.user.pk ?
                        <Button variant="outline-danger">Отменить</Button>
                        :
                        <Button variant="outline-success">Записаться</Button>
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
