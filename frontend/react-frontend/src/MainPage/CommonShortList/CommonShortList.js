import React from 'react';
import './CommonShortList.css';
import {Container, Row} from "react-bootstrap";
import ViewAllLink from "../ViewAllLink/ViewAllLink";
import axios from 'axios';

class CommonShortList extends React.Component {
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

export default CommonShortList;
