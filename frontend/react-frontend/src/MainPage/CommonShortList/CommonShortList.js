import React from 'react';
import './CommonShortList.css';
import {Container, Row} from "react-bootstrap";
import ViewAllLink from "../ViewAllLink/ViewAllLink";
import axios from 'axios';
import DoctorShortItem from "../DoctorShortList/DoctorShortItem/DoctorShortItem";
import NewsShortItem from "../NewsShortList/NewsShortItem/NewsShortItem";
import ArticleShortItem from "../ArticleShortList/ArticleShortItem/ArticleShortItem";

class CommonShortList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(response => {
        this.setState({
          items: response.data.results
        });
        console.log(response.data);
      })
  }

  render() {
    const {button, title} = this.props;
    const row = this.state.items.map((item, index) => {
        let res = '';
        if (button.to === '/doctors')
          res = <DoctorShortItem key={index} item={item} index={index}/>;
        else if (button.to === '/news')
          res = <NewsShortItem key={index} item={item} index={index}/>;
        else if (button.to === '/articles')
          res = <ArticleShortItem key={index} item={item} index={index}/>;
        return res;
      }
    );

    return (
      <Container>
        <h3 className="text-left">{title}</h3>
        <Row>
          {row}
        </Row>
        <ViewAllLink button={button}/>
      </Container>
    )
  };
}

export default CommonShortList;
