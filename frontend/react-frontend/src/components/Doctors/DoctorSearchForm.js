import React from 'react';
import {Button, ButtonGroup, Form, FormControl} from "react-bootstrap";
import {BACKEND_URL} from "../../constants";

class DoctorSearchForm extends React.Component {
  handleSearch = (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    this.props.getData(1, `${BACKEND_URL}/rest-api/staff/search_doctors/${text}`);

    // нужен redux, при наличии > 3 врачей пагинация отрабатывает неправильно

  };

  handleReset = (event) => {
    event.preventDefault();
    this.props.getData(1);
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

export default DoctorSearchForm;
