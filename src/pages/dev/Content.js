import React, { Component } from 'react';
import { Col, Container, Figure, Image,Row } from 'react-bootstrap';
import Angular from '../../assets/icons/angular.svg';
import IconReact from '../../assets/icons/react.svg';
import IconVue from '../../assets/icons/vuejs.svg';
import IconPython from '../../assets/icons/python.svg';
import IconPhp from '../../assets/icons/php.svg';
import IconJava from '../../assets/icons/java.svg';
import IconReactNative from '../../assets/icons/react-native-app-icon.svg';
import IconIonic from '../../assets/icons/ionic.svg';
import IconCSharp from '../../assets/icons/c.svg';
export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='devContent' className='py-5 bg-light'>
            <h2 className='text-center'>Nos Technologies</h2>
            <Container className='my-5'>
                <Row>
                    <Col md={6}>
                        <h2 data-aos='zoom-in' data-aos-duration={2000}>Developpement web front-end</h2>
                        <Figure className='d-flex flex-row justify-content-center align-items-center'>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={Angular} sizes='sm' width={70} height={70}/>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconReact} sizes='sm' width={70} height={70}/>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconVue} sizes='sm' width={70} height={70}/>
                        </Figure>
                    </Col>
                    <Col md={6}>
                        <h2 data-aos='zoom-in' data-aos-duration={2000}>Developpement web back-end</h2>
                        <Figure className='d-flex flex-row justify-content-center align-items-center'>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconJava} sizes='sm' width={50} height={70}/>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconPython} sizes='sm' width={70} height={70}/>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconPhp} sizes='sm' width={70} height={70}/>
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2 data-aos='zoom-in' data-aos-duration={2000}>Developpement Mobil</h2>
                        <Figure className='d-flex flex-row justify-content-center align-items-center'>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconJava} sizes='sm' width={50} height={70}/>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconReactNative} sizes='sm' width={70} height={70}/>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconIonic} sizes='sm' width={70} height={70}/>
                        </Figure>
                    </Col>
                    <Col md={6}>
                        <h2 data-aos='zoom-in' data-aos-duration={2000}>Developpement web back-end</h2>
                        <Figure className='d-flex flex-row justify-content-center align-items-center'>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconJava} sizes='sm' width={50} height={70}/>
                            <Image data-aos='fade-up' data-aos-duration={2000} className='mx-3' src={IconCSharp} sizes='sm' width={70} height={70}/>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </section>
      </React.Fragment>
    )
  }
}
