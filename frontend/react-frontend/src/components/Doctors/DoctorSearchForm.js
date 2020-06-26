import React from 'react';
import {Button, ButtonGroup, Form, FormControl} from "react-bootstrap";
import {BACKEND_URL} from "../../constants";
import * as actions from "../../store/actions/filters/actionCreators";
import {connect} from "react-redux";

class DoctorSearchForm extends React.Component {
  handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.elements.text.value;
    const {doctorsByPostSearchUrl, getData} = this.props;
    const url = doctorsByPostSearchUrl || `${BACKEND_URL}/rest-api/staff/doctors/search`;
    const searchUrl = `${url}/${searchText}/`;
    getData(1, searchUrl);
    this.props.setDoctorSearchUrl(searchUrl);
  };

  handleReset = (event) => {
    event.preventDefault();
    this.props.getData(1, this.props.doctorsByPostUrl);
    this.props.setSearchUrl(null);
  };

  render() {
    return (
      <div className="DoctorSearchForm">
        <Form onSubmit={this.handleSearch}>
          <Form.Group controlId="formGroupSearch">
            <FormControl name="text" type="text" placeholder="Поиск" required/>
          </Form.Group>
          <ButtonGroup style={{width: '100%'}}>
            <Button style={{width: '50%'}} type="submit" variant="outline-success">Найти</Button>
            <Button style={{width: '50%'}} variant="outline-danger" onClick={this.handleReset}>Сброс</Button>
          </ButtonGroup>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDoctorSearchUrl: (value) => dispatch(actions.setDoctorSearchUrl(value))
  }
};

export default connect(null, mapDispatchToProps)(DoctorSearchForm);
