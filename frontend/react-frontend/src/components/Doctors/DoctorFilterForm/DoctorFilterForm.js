import React from 'react';
import './DoctorFilterForm.css';
import {Button, ButtonGroup, Form} from "react-bootstrap";
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

  handleReset = (event) => {
    event.preventDefault();
    this.setState({selectedValue: 'Выберите должность'});
    this.props.getData(1);
  };

  render() {
    const {posts, selectedValue} = this.state;

    return (
      <div className="DoctorFilterForm mt-2">
        <Form onSubmit={this.handleFilter}>
          <Form.Group controlId="formGroupFilter">
            <select value={selectedValue}
                    className="filter-select"
                    onChange={this.handleChange}
                    required>
              <option disabled hidden value={selectedValue}>{selectedValue}</option>
              {
                posts.map((item, index) => (
                  <option value={item.name} key={index} pk={item.pk}>{item.name}</option>
                ))
              }
            </select>
          </Form.Group>
          <ButtonGroup style={{width:'100%'}}>
            <Button style={{width: '50%'}} type="submit" variant="outline-success">Применить</Button>
            <Button style={{width: '50%'}} variant="outline-danger" onClick={this.handleReset}>Сброс</Button>
          </ButtonGroup>
        </Form>
      </div>
    )
  }
}

export default DoctorFilterForm;
