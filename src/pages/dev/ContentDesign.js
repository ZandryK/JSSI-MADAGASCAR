import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class ContentDesign extends Component {
  render() {
    return (
     <React.Fragment>
        <section id='contentDesign' className='py-5'>
            <h2 className='text-center'>Nos offres</h2>
            <Container className='my-5'>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}></Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </section>
     </React.Fragment>
    )
  }
}
