import React from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import SupportQuestionList from "./SupportQuestionList";
import SupportQuestionForm from "../../components/Support/SupportQuestionForm";


class Support extends React.Component {
  render() {
    return (
      <Container className="LkSupport">
        <Tabs defaultActiveKey="view" id="tab-patient-reviews">
          <Tab eventKey="view" title="Просмотр">
            <SupportQuestionList/>
          </Tab>
          <Tab eventKey="add" title="Добавить">
            <div className="mt-4">
              <SupportQuestionForm/>
            </div>
          </Tab>
        </Tabs>
      </Container>
    )
  };
}

export default Support;
