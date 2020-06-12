import React from 'react';
import './DoctorDetail.css';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import customAvatar from '../../../images/custom_avatar.png'
import LineProperty from "../LineProperty";
import ReactHtmlParser from 'react-html-parser';
import DoctorPrizeImages from "../DoctorPrizeImages";
import {connect} from "react-redux";

class DoctorDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: {},
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/staff/doctors/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          doctor: response.data
        });
      })
  }

  render() {
    const {doctor} = this.state;
    const {isAuthenticated} = this.props;
    if (doctor.university) {
      var university = <LineProperty name="Наименование высшего учебного заведения"
                                     content={doctor.university.name}/>;
    }
    if (doctor.diploma_specialty) {
      var diplomaSpecialty = <LineProperty name="Специальность по диплому"
                                           content={doctor.diploma_specialty.name}/>;
    }
    if (doctor.qualification_category) {
      var qualificationCategory = <LineProperty name="Квалицикационная категория"
                                                content={doctor.qualification_category.name}/>;
    }
    if (doctor.additional_education) {
      var additionalEducation = <LineProperty name="Дополнительное образование"
                                              content={ReactHtmlParser(doctor.additional_education)}/>;
    }
    if (doctor.awards) {
      var awards = <LineProperty name="Награды"
                                 content={ReactHtmlParser(doctor.awards)}/>;
    }
    if (doctor.certificates) {
      var certificates = <LineProperty name="Сертификаты"
                                       content={ReactHtmlParser(doctor.certificates)}/>;
    }
    const experienceFrom = <LineProperty name="Стаж работы с"
                                         content={doctor.experience_from}/>;
    if (doctor.user) {
      var {avatar, last_name, first_name, middle_name, phone_number, email} = doctor.user;
    }
    const caption =
      <h3 className="orange-caption-center">
        {last_name}&nbsp;{first_name}<br/>{middle_name}
      </h3>;

    return (
      <div className="DoctorDetail">
        <Container className="mt-4">
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
              {university}
              <span className="font-italic font-weight-bold">Должность</span>:
              {
                doctor.posts ? doctor.posts.map((item, index) => (
                  <span key={index}>
                    &nbsp;{item.name}
                    &nbsp;({item.department.name})
                  </span>
                )) : null
              }
              {diplomaSpecialty}
              {qualificationCategory}
              {experienceFrom}
              {additionalEducation}
              {awards}
              {certificates}
            </Col>
          </Row>
        </Container>
        <DoctorPrizeImages doctor={doctor}/>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
};

export default connect(mapStateToProps, null)(DoctorDetail);
