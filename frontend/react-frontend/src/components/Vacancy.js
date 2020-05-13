import React from 'react';
import {Container} from "react-bootstrap";
import * as constants from '../constants';

class Vacancy extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      'врач-УЗИ',
      'врач-терапевт',
      'врач-акушер-гинеколог',
      'врач-оториноларинголог (ЛОР-врач)',
      'врач-эн­докринолог',
      'врач-гастроэнтеролог',
      'врач-офтальмолог',
      'врач-рентгенолог',
      'врач-невролог',
      'врач-педиатр',
      'врач-ревматолог',
      'врач-стоматолог-хирург',
      'врач-стоматолог-ортопед',
      'врач-стоматолог детский',
      'медицинская сестра стоматологического отделения',
      'медицинская сестра процедурной',
      'оператор сall-центра',
    ];
  }

  render() {
    return (
      <Container className="Vacancy">
        <h3 className="orange-caption-left">Вакансии</h3>
        <p className="font-weight-bold">Уважаемые врачи!</p>
        <p>В связи с расширением, а также долгосрочными планами развития, «Медцентр» продолжает набор врачей и
          медицинских
          сестер всех направлений. Если Вы знаете и любите свою работу, приходите, пишите, звоните нам! Мы будем рады
          знакомству, начнем сотрудничество или наметим его на будущее.</p>
        <hr/>
        <p className="font-weight-bold font-italic">Нам требуются:</p>
        <ul>
          {
            this.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
        <p>
          Резюме отправлять по адресу: <span className="contact-item">{constants.COMPANY_EMAIL}</span> или звоните по
          тел. <span className="contact-item">{constants.COMPANY_PHONE}</span>.
        </p>
      </Container>
    )
  }
}

export default Vacancy;
