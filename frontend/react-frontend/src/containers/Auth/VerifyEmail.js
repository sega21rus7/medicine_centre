import React from 'react';
import axios from "axios";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import image from "./sign_image.jpg";
import {Link} from "react-router-dom";


class VerifyEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    }
  }

  componentDidMount() {
    const key = this.props.match.params.key;
    axios.get(`http://localhost:8000/rest-auth/registration/account-confirm-email/${key}`)
      .then(response => {
        this.setState({
          success: true,
        });
      })
  }

  render() {
    const {success} = this.state;
    let message = 'Ваш email был успешно подтвержден!';
    if (!success) {
      message = 'При подтверждении email произошла ошибка!';
    }
    return (
      <Container className="VerifyEmail">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={6} className="d-none d-lg-block bg-image">
                <Image
                  src={image}
                  alt=""
                  className="img-fluid"
                >
                </Image>
              </Col>
              <Col lg={6}>
                <div className="p-lg-5 p-3">
                  <div className="text-center">
                    <h1 className="caption-center">Подтверждение email</h1>
                    <p>{message}</p>
                    <hr/>
                    <div className="text-center">
                      <Link className="text-small" to="/forgot_password">
                        Забыли пароль?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="text-small" to="/sign_in">
                        Уже есть аккаунт? Войдите
                      </Link>
                    </div>
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
