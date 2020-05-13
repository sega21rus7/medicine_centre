import React from 'react';
import './DoctorFilterForm.css';
import {Button, Form} from "react-bootstrap";
import axios from "axios";

class DoctorFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedValue: 'Выберите должность',
      selectedValuePk: null,
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get('http://localhost:8000/staff/api/posts/')
      .then(response => {
        this.setState({posts: response.data});
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.response);
      })
  };

  handleFilter = (event) => {
    event.preventDefault();
    this.props.getData(
      1,
      `http://localhost:8000/staff/api/doctors_by_post/${this.state.selectedValuePk}`);
  };

  handleChange = (event) => {
    event.preventDefault();
    const selectedIndex = event.target.options.selectedIndex;
    const pk = event.target.options[selectedIndex].getAttribute('pk');
    this.setState({
      selectedValue: event.target.value,
      selectedValuePk: pk,
    });
  };

  render() {
    const {posts} = this.state;

    return (
      <div className="DoctorFilterForm mt-2">
        <Form onSubmit={this.handleFilter}>
          <Form.Group controlId="formGroupFilter">
            <select value={this.state.selectedValue}
                    className="filter-select"
                    onChange={this.handleChange}
                    required>
              <option disabled hidden value="Выберите должность">Выберите должность</option>
              {
                posts.map((item, index) => (
                  <option value={item.name} key={index} pk={item.pk}>{item.name}</option>
                ))
              }
            </select>
          </Form.Group>
          <Button type="submit" variant="outline-success" block>Отфильтровать</Button>
        </Form>
      </div>
    )
  }
}

export default DoctorFilterForm;
