import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { BiCodeCurly, BiLayer } from "react-icons/bi";
import { MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";

export default class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='service' className='jumbotron-fluid '>
            <Container className='py-5'>
                <h2 className='text-center my-5'>Services</h2>
                <Row className='my-5 py-2'>
                    <Col md={4}>
                        <Card data-aos='fade-up' data-aos-duration={2000}>
                            <div className='px-4 pt-3'>
                                <BiCodeCurly className='icon'/>
                            </div>
                            <Card.Body className='d-flex flex-column'>
                                <h6>Developpement</h6>
                                <p>Réalisation et le développement de votre site web,application mobile ou desktop</p>
                                <Link className='ml-auto mt-auto' to={'developpement'}>En savoir plus</Link>
                            </Card.Body>
                            

                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card data-aos='fade-up' data-aos-duration={2000}>
                            <div className='px-4 pt-3'>
                                <BiLayer className='icon'/>
                            </div>
                            <Card.Body className='d-flex flex-column'>
                                <h6>Graphic Design</h6>
                                <p>Réalisation et conception de votre logo,maquêtte etc</p>
                                <Link className='ml-auto mt-auto' to={'graphic-design'}>En savoir plus</Link>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card data-aos='fade-up' data-aos-duration={2000}>
                            <div className='px-4 pt-3'>
                                <MdSchool className='icon'/>
                            </div>
                            <Card.Body className='d-flex flex-column'>
                                <h6>Formation professionnel</h6>
                                <p>Developpement web full stack<br/>Graphic Design et multimedia</p>
                                <Link className='ml-auto mt-auto' to={'formation'}>En savoir plus</Link>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
      </React.Fragment>
    )
  }
}
