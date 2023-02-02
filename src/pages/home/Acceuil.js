import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Acceuil extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='home'>
          <div className='blur'>
            
          </div>
            <Container>
                <Row className='h-100'>
                    <Col md={6} className='h-100 d-flex flex-column justify-content-center align-items-start'>
                        <h1 className='' data-aos="fade-up" data-aos-duration={3000}>JSSI Madagascar</h1>
                        <p className="text-white" data-aos="fade-up" data-aos-duration={3000}>Ensemble, réalisons votre identité visuelle avec efficience!</p>
                        <a href="#contact" className='btn btn-lg btn-warning rounded-lg' data-aos="fade-up" data-aos-duration={3000}><span></span><span></span><span></span>Nous Contacter</a>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Container>
        </section>
      </React.Fragment>
    )
  }
}
