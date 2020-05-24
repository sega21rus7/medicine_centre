import React from 'react';
import {Button, Form} from "react-bootstrap";

class ReceptionFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const index = Number(this.state.selectedIndex);
    this.props.getSchedule(index);
  };

  render() {
    return (
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
    )
  }
}

export default ReceptionFilterForm;
