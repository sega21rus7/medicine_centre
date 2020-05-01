import React from 'react';
import './ItemsShortList.css';
import {Container, Row} from "react-bootstrap";
import ViewAllLink from "../ViewAllLink/ViewAllLink";
import axios from 'axios';

class ItemsShortList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <h3 className="text-left">{this.props.title}</h3>
        <Row>
          {this.props.row}
        </Row>
        <ViewAllLink button={this.props.button}/>
      </Container>
    )
  };
}

export default ItemsShortList;
