import React from 'react';
import './Lk.css';


class Lk extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token') || '';
    if (token) {
      console.log(token);
    }
  }

  render() {
    return (
      <div className="Lk">
        Lk
      </div>
    )
  };
}

export default Lk;
