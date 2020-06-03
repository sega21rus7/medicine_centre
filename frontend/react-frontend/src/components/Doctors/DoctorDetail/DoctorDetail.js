import React from 'react';
import './DoctorDetail.css';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import customAvatar from '../../../images/custom_avatar.png'
import DoctorProperty from "../DoctorProperty";
import ReactHtmlParser from 'react-html-parser';
import DoctorPrizeImages from "../DoctorPrizeImages";

class DoctorDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: {},
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/staff/api/doctors/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          doctor: response.data
        });
      })
  }

  render() {
    const {doctor} = this.state;
    if (doctor.university) {
      var university = <DoctorProperty name="Наименование высшего учебного заведения"
                                       content={doctor.university.name}/>;
    }
    if (doctor.diploma_specialty) {
      var diplomaSpecialty = <DoctorProperty name="Специальность по диплому"
                                             content={doctor.diploma_specialty.name}/>;
    }
    if (doctor.qualification_category) {
      var qualificationCategory = <DoctorProperty name="Квалицикационная категория"
                                                  content={doctor.qualification_category.name}/>;
    }
    if (doctor.additional_education) {
      var additionalEducation = <DoctorProperty name="Дополнительное образование"
                                                content={ReactHtmlParser(doctor.additional_education)}/>;
    }
    if (doctor.awards) {
      var awards = <DoctorProperty name="Награды"
                                   content={ReactHtmlParser(doctor.awards)}/>;
    }
    if (doctor.certificates) {
      var certificates = <DoctorProperty name="Сертификаты"
                                         content={ReactHtmlParser(doctor.certificates)}/>;
    }
    const experienceFrom = <DoctorProperty name="Стаж работы с"
                                           content={doctor.experience_from}/>;
    if (doctor.user) {
      var {avatar, last_name, first_name, middle_name} = doctor.user;
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

export default DoctorDetail;
