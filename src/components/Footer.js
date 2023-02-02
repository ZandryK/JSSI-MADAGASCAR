import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope,FaMapMarked, FaPhoneAlt } from "react-icons/fa"
import {SocialIcon} from 'react-social-icons'
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className='text-lg-start text-muted' style={{backgroundColor: '#171621'}}>
          <section className='py-5'>
            <Container>
              <Row className='mt-3'>
                <Col md={6} className='mx-auto mb-4'>
                  <h6 className='text-uppercase font-weight-bold mb-4'>JSSI Madagascar</h6>
                  <p className='text-start'>Confiez-nous la création et la refonte de votre logo et charte graphique, la réalisation et le developpement de votre site web, vos spots vidéos et animation et autres campagnes ainsi de vos contenues graphiques</p>
                </Col>
                <Col md={6} className='mb-md-0 mb-4 px-4'>
                  <h6 className='text-uppercase font-weight-bold'>Contact</h6>
                  <p > <FaMapMarked className='text-warning'/>&nbsp;&nbsp;67ha Nord Est Antananarivo 101, Madagascar</p>
                  <p > <FaEnvelope className='text-warning'/>&nbsp;&nbsp;jssi@domaine.com</p>
                  <p > <FaPhoneAlt className='text-warning'/>&nbsp;&nbsp;+261345600467</p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='d-flex justify-content-center p-4 border-bottom'>
            <div>
              <SocialIcon network='facebook' className="mx-2 text-reset"/>
              <SocialIcon network='twitter' className="mx-2 text-reset"/>
              <SocialIcon network='linkedin' className="mx-2 text-reset"/>
            </div>
          </section>
          <div className='text-center p-4' style={{backgroundColor: 'rgba(0,0,0,0.05)'}}>
            &copy; 2023 Copyright:
            <a href="jssi.mg" className='text-reset font-weight-bold'>JSSI.MG</a>

          </div>
        </footer>
      </React.Fragment>
    )
  }
}
