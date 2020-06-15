import React from 'react';
import './DoctorDetail.css';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import customAvatar from '../../../images/custom_avatar.png'
import LineProperty from "../LineProperty";
import ReactHtmlParser from 'react-html-parser';
import {connect} from "react-redux";
import {BACKEND_URL} from "../../../constants";
import SpinnerComponent from "../../SpinnerComponent";

class DoctorDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: null,
    }
  }

  componentDidMount() {
    axios.get(`${BACKEND_URL}/rest-api/staff/doctors/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          doctor: response.data
        });
      })
  }

  render() {
    const {doctor} = this.state;
    const {isAuthenticated} = this.props;

    if (doctor && doctor.user) {
      var {avatar, last_name, first_name, middle_name, phone_number, email} = doctor.user;
    }
    const caption =
      <h3 className="orange-caption-center">
        {last_name}&nbsp;{first_name}<br/>{middle_name}
      </h3>;

    return (
      <Container className="DoctorDetail mt-4">
        {
          doctor ?
            <>
              <Row>
                <Col lg={5}>
                  {caption}
                  <Card>
                    <Card.Img
                      variant="top"
                      src={avatar || customAvatar}
                      className="img-fluid"
                    />
                  </Card>
                </Col>
                <Col lg={7}>
                  {
                    isAuthenticated ?
                      <>
                        <LineProperty name="Номер телефона" content={phone_number || 'не указан'}/>
                        <LineProperty name="Email" content={email}/>
                      </> : null
                  }
                  {
                    doctor.university ?
                      <LineProperty name="Наименование высшего учебного заведения"
                                    content={doctor.university.name}/>
                      : null
                  }
                  <span className="font-italic font-weight-bold">Должность</span>:
                  {
                    doctor.posts ? doctor.posts.map((item, index) => (
                      <span key={index}>
                    &nbsp;{item.name}
                        &nbsp;({item.department.name})
                  </span>
                    )) : null
                  }
                  {
                    doctor.diplomaSpecialty ?
                      <LineProperty name="Специальность по диплому"
                                    content={doctor.diploma_specialty.name}/>
                      : null
                  }
                  {
                    doctor.qualificationCategory ?
                      <LineProperty name="Квалицикационная категория"
                                    content={doctor.qualification_category.name}/>
                      : null
                  }
                  {
                    doctor.experienceFrom ?
                      <LineProperty name="Стаж работы с"
                                    content={doctor.experience_from}/>
                      : null
                  }
                  {
                    doctor.additionalEducation ?
                      <LineProperty name="Дополнительное образование"
                                    content={ReactHtmlParser(doctor.additional_education)}/>
                      : null
                  }
                  {
                    doctor.awards ?
                      <LineProperty name="Награды"
                                    content={ReactHtmlParser(doctor.awards)}/>
                      : null
                  }
                  {
                    doctor.certificates ?
                      <LineProperty name="Сертификаты"
                                    content={ReactHtmlParser(doctor.certificates)}/>
                      : null
                  }
                </Col>
              </Row>
            </>
            : <SpinnerComponent/>
        }
      </Container>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
};

export default connect(mapStateToProps, null)(DoctorDetail);
