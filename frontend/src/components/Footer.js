import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <hr/>
      <Container>
        <Row>
        <Col lg={4} className='mx-auto icons'>
        <p className='d-flex contact-icon mt-4' style={{justifyContent:"space-around"}}>
        <a href='https://github.com/Ragul333' target='_blank' style={{color:"black"}} >
            <i class="fab fa-github" ></i>
            </a>
            <a href='https://www.linkedin.com/in/ragul-s-7192311a9/' target='_blank'>
            <i class="fab fa-linkedin-in" style={{color:"#0e76a8"}}></i>
            </a>
            <a href='https://www.instagram.com/_ragul_s/' target='_blank'>
            <i class="fab fa-instagram" style={{color:"#d64949"}}></i>
            </a>
            </p>
        </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
