import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {
        'Кабинет': '/lk',
        'Новости': '/news',
        'Статьи': '/articles',
        'Контакты': '/contacts',
        'О нас': '/about_us',
      },
      site_name: 'Медцентр',
    }
  }

  render() {
    return (
      <div className="App">
        <Header nav={this.state.nav} site_name={this.state.site_name}/>
        <Content/>
        <Footer/>
      </div>
    )
  };
}

export default App;
