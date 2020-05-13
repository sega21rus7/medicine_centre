import React from 'react';
import {Button, Form, FormControl} from "react-bootstrap";

class DoctorSearchForm extends React.Component {
  handleSearch = (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    this.props.getData(1, `http://localhost:8000/staff/api/search_doctors/${text}`);

    // нужен redux, при наличии > 3 врачей пагинация отрабатывает неправильно

  };

  render() {
    return (
      <div className="DoctorSearchForm">
        <Form onSubmit={this.handleSearch}>
          <Form.Group controlId="formGroupSearch">
            <FormControl name="text" type="text" placeholder="Поиск" required/>
          </Form.Group>
          <Button type="submit" variant="outline-success" block>Найти</Button>
        </Form>
      </div>
    )
  }
}

export default DoctorSearchForm;
