import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='about'>
            <Container className='py-5'>
                <h2 className='text-center my-5'>A propos</h2>
                <Row className='my-5 py-2'>
                    <Col md={5}>
                        <h5 data-aos="fade-up" data-aos-duration={2000}>
                            Présentation
                        </h5>
                        <p className='px-md-1' data-aos="fade-up" data-aos-duration={2000}>
                            JSSI ou Joyce Solution et Service Informatique, une agence de communication digitale et de solution informatique spécialisée dans la conception graphique et le développement web. 
                        </p>
                        <p className='px-md-1' data-aos="fade-up" data-aos-duration={2000}>
                            Faites appel à nous pour tous vos projets digitaux comme la création et la refonte de votre logo et charte graphique, des packagings de vos produits, la réalisation et le développement de votre site web, de vos spots vidéo et animation et autres campagnes ainsi que vos contenus graphiques.
                        </p>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <h5 data-aos="fade-up" data-aos-duration={2000}>Reférences</h5>
                    </Col>
                </Row>
            </Container>
        </section>
      </React.Fragment>
    )
  }
}
