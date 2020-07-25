import React, { Component } from 'react';
import {
  Row,
  Col
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <>
     

        <div style={SecondFooterStyle}>
          <p style={{ fontSize: '14px' }}>Municipalidad de San Miguel</p>
          <form>
          </form>
        </div>
      </>
    )
  }
}

const FooterStyle = {
  background: '#1976D2',
  color: '#fff',
  padding: '10px'
}
const SecondFooterStyle = {

  background: '#1b71c6',
  color: '#fff',
  textAlign: 'center',
  padding: '7px'
}
export default Footer;
