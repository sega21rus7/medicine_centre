import React from 'react';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import AlreadySignUpPanel from "../../components/Auth/AlreadySignUpPanel";
import LeftImage from "../../components/Auth/LeftImage";


class VerifyEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    }
  }

  componentDidMount() {
    const key = this.props.match.params.key;
    axios.get(`http://localhost:8000/rest-auth/registration/account-confirm-email/${key}`)
      .then(response => {
      })
      .catch(err => {
        this.setState({status: err.response.status});
      })
  }

  render() {
    const {status} = this.state;
    let message = 'Ваш email был успешно подтвержден!';
    if (status === 404) {
      message = 'При подтверждении email произошла ошибка!';
    }
    return (
      <Container className="VerifyEmail">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={6} className="d-none d-lg-block bg-image">
                <LeftImage/>
              </Col>
              <Col lg={6}>
                <div className="p-lg-5 p-3">
                  <div className="text-center">
                    <h1 className="caption-center">Подтверждение email</h1>
                    <p>{message}</p>
                    <AlreadySignUpPanel/>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  };
}

export default VerifyEmail;
