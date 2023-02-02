import React, { Component } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import gd from '../../assets/images/about/ss.png'
import dw from '../../assets/images/about/4884785.jpg'

export default class ContentFormation extends Component {
 
  render() {
    return (
      <React.Fragment>
        <section id='contentFormation' className='py-5 bg-light'>
            <h2 className='text-center'>Nos formations</h2>
            <Container className='my-5'>
                <Row className='w-100'>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                      <Card className='w-100 px-2 py-2 gd'>
                          <Row>
                              <Col md={6} className="d-flex flex-column ">
                                <div className='fond mx-auto my-auto'>
                                  <Image src={gd} className=""/>
                                </div>
                              </Col>
                              <Col md={6}>
                                  <h4 className='text-center'>GRAPHIC DESIGN ET MONTAGE VIDEO</h4>
                                  <hr/>
                                  <p className='text-center'>Vous avez le BAC ou NON, obtenez votre diplôme en informatique reconnu par l'Etat.</p>
                                  <h6><FaCheckCircle className='text-info'/> Sans Bacc: &nbsp;<span className=''>Obtenez un diplôme equivalent du Bacc Pro en informatique DBP </span></h6>
                                  <h6><FaCheckCircle className='text-info'/> BACHELIER: &nbsp;<span>Obtenez un diplôme de technicien supérieur en informatique DTS </span></h6>
                                  <h5>Condtition d'admission:</h5>
                                  <ul>
                                      <li><FaCheckCircle className='text-info'/> Avec ou sans BACC</li>
                                      <li><FaCheckCircle className='text-info'/> Avoir une forte connaissance en informatique</li>
                                  </ul>
                              </Col>
                          </Row>
                      </Card>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
                <Row className='w-100 mt-3'>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                      <Card className='w-100 px-2 py-2'>
                          <Row>
                              <Col md={6} className="d-flex flex-column dw" >
                                <div className='fond1 mx-auto my-auto'>
                                <Image src={dw}/>
                                </div>
                                
                              </Col>
                              <Col md={6}>
                                  <h4 className='text-center'>GRAPHIC DESIGN ET DEVELOPPEMENT WEB FULL STACK</h4>
                                  <hr/>
                                  <p className='text-center'>Vous avez le BAC ou NON, obtenez votre diplôme en informatique reconnu par l'Etat.</p>
                                  <h6><FaCheckCircle className='text-info'/> Sans Bacc: &nbsp;<span className=''>Obtenez un diplôme equivalent du Bacc Pro en informatique DBP </span></h6>
                                  <h6><FaCheckCircle className='text-info'/> BACHELIER: &nbsp;<span>Obtenez un diplôme de technicien supérieur en informatique DTS </span></h6>
                                  <h5>Condtition d'admission:</h5>
                                  <ul>
                                      <li><FaCheckCircle className='text-info'/> Avec ou sans BACC</li>
                                      <li><FaCheckCircle className='text-info'/> Avoir une forte connaissance en informatique</li>
                                  </ul>
                              </Col>
                          </Row>
                      </Card>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
            </Container>
        </section>
      </React.Fragment>
    )
  }
}
