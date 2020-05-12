import React from "react";
import {Container, Row} from "react-bootstrap";
import axios from "axios";
import PaginationComponent from "../../components/PaginationComponent";
import SupportQuestionListItem from "../../components/SupportQuestions/SupportQuestionListItem";

class UserSupportQuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      previous: null,
      count: 0,
      items: [],
      paginateCount: 0,
    };
    this.paginate_by = 3;
  }

  componentDidMount() {
    this.getData(1);
  }

  getData = (page) => {
    const url = `http://localhost:8000/marketing/api/user_support_questions/?page=${page}`;
    let token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers = {'Authorization': `Token ${token}`};
      axios.get(url)
        .then(response => {
          this.setState({
            items: response.data.results,
            next: response.data.next,
            previous: response.data.previous,
            count: response.data.count,
          });
          console.log(response.data);
        })
        .then(() => {
          this.setState({
            paginateCount: Math.ceil(this.state.count / this.paginate_by)
          });
        })
    }
  };

  render() {
    const {next, previous, items, paginateCount} = this.state;

    const row = this.state.items.map((item, index) => {
        return <SupportQuestionListItem key={index} item={item} index={index}/>;
      }
    );

    if (paginateCount > 1) {
      var pagination = <PaginationComponent items={items}
                                            getData={this.getData}
                                            paginateCount={paginateCount}
                                            next={next}
                                            previous={previous}/>;
    }

    return (
      <Container className="mt-4">
        <h3 className="caption-left">Мои обращения</h3>
        <Row>
          {row}
        </Row>
        {pagination}
      </Container>
    )
  };
}

export default UserSupportQuestionList;
