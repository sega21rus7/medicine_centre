import React from 'react';
import './DoctorFilterForm.css';
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import {BACKEND_URL} from "../../../constants";
import * as actions from "../../../store/actions/filters/actionCreators";
import {connect} from "react-redux";

class DoctorFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedValue: 'Должность',
      selectedValuePk: null,
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get(`${BACKEND_URL}/rest-api/staff/posts/`)
      .then(response => {
        this.setState({posts: response.data});
      })
      .catch(err => {

      })
  };

  handleFilter = (event) => {
    event.preventDefault();
    const pk = this.state.selectedValuePk;
    if (pk) {
      const filterUrl = `${this.props.postFilterUrl}${pk}`;
      this.props.getData(1, filterUrl);
      this.props.setFilterUrl(filterUrl);
    }
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
    this.setState({
      selectedValue: 'Должность',
      selectedValuePk: null,
    });
    this.props.getData(1, this.props.specialUrl);
    this.props.setFilterUrl(null);
  };

  render() {
    const {posts, selectedValue} = this.state;

    return (
      <div className="DoctorFilterForm mt-2">
        <div className="text-center text-blue mb-2">Фильтр</div>
        <Form onSubmit={this.handleFilter}>
          <Form.Group controlId="formGroupFilter">
            <Form.Control as="select"
                          value={selectedValue}
                          className="filter-select"
                          onChange={this.handleChange}
                          required>
              <option disabled hidden value={selectedValue}>{selectedValue}</option>
              {
                posts.map((item, index) => (
                  <option value={item.name} key={index} pk={item.pk}>{item.name}</option>
                ))
              }
            </Form.Control>
          </Form.Group>
          <Button type="submit" variant="outline-success" block>Применить</Button>
          <Button variant="outline-danger" onClick={this.handleReset} block>Сброс</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterUrl: (value) => dispatch(actions.setDoctorFilterUrl(value))
  }
};

export default connect(null, mapDispatchToProps)(DoctorFilterForm);
