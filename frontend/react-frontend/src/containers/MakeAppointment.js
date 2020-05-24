import React from 'react';
import {connect} from "react-redux";
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class MakeAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: null,
      selectedValue: 'Выберите пункт',
      selectedIndex: null,
    };
    this.filterItems = [
      'Мои записи',
      'Свободные записи'
    ];
  }


  handleChange = (event) => {
    event.preventDefault();
    const selectedIndex = event.target.options.selectedIndex;
    const index = event.target.options[selectedIndex].getAttribute('index');
    this.setState({
      selectedValue: event.target.value,
      selectedIndex: index,
    });
  };

  handleFilter = (event) => {
    event.preventDefault();
    this.getSchedule();
  };

  getSchedule = () => {
    const token = localStorage.getItem('token');
    if (token && this.props.user) {
      const pk = this.props.user.patient;
      const url = Number(this.state.selectedIndex) === 0 ?
        `http://localhost:8000/reception/api/receptions_by_patient/${pk}` :
        'http://localhost:8000/reception/api/free_receptions/';
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({schedule: res.data.results});
          console.log(res.data.results);
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
    const {schedule} = this.state;
    const {user} = this.props;

    return (
      <Container>
        <Row>
          <Col md={3}>
            <Form onSubmit={this.handleFilter}>
              <Form.Group controlId="formGroupFilter">
                <select value={this.state.selectedValue}
                        className="filter-select"
                        onChange={this.handleChange}
                        required>
                  <option disabled hidden value="Выберите пункт">Выберите пункт</option>
                  {
                    this.filterItems.map((item, index) => (
                      <option value={item} key={index} index={index}>{item}</option>
                    ))
                  }
                </select>
              </Form.Group>
              <Button type="submit" variant="outline-success" block>Выбрать</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
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
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(MakeAppointment);
