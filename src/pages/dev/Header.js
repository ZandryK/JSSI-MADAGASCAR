import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      backgroundImage:'url('+ this.props.src +')'
    }
  }
  render() {
    return (
      <React.Fragment>
        <section id='header' style={{backgroundImage:this.state.backgroundImage}}>
          <div className='blur'>
            
          </div>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col md={2} className='h-100'></Col>
                    <Col md={8} className='h-100 d-flex flex-column justify-content-center align-items-center'>
                        <h1>{this.props.title}</h1>
                    </Col>
                    <Col md={2} className='h-100'></Col>
                </Row>
            </Container>
        </section>
      </React.Fragment>
    )
  }
}
