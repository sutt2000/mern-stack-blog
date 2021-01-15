import React from 'react'
import {Row} from 'reactstrap'
import {Col} from 'reactstrap'

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear()
    return year; 
  }

  return (
    <div id="main-footer" className="text-center p2 m-auto">
      <Row>
        <Col>
          <p>Copyright &copy<span>{thisYear()}</span></p>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;