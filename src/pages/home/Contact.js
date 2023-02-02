import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      val: ''
    }
    this.clickEnventListener = this.clickEnventListener.bind(this);
  }
  clickEnventListener = (e)=>{
    const input = document.querySelectorAll('input');
    const textarea = document.querySelector("textarea");
    input.forEach(item => {
        if(item.value === this.state.val && item.getAttribute("type") !== 'file'){
          item.classList.add('is-invalid');
        }
    });
    if (textarea.value === this.state.val) {
      textarea.classList.add('is-invalid');
    }
  }

  componentDidMount(){
    const input = document.querySelectorAll('input');
    input.forEach(item =>{
      item.addEventListener("focus",(e)=>{
        e.target.classList.remove('is-invalid');
      })
    });
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("focus",(e)=>{
      e.target.classList.remove('is-invalid')
    });
    
    document.querySelector("#file").addEventListener('change',(e)=>{
      console.log(e);
    })
  }
  render() {
    return (
      <React.Fragment>
        <section id='contact'>
            <Container className='py-5'>
            <h2 className='text-center my-5'>Contact</h2>
                <Row className='my-5 py-2'>
                    <Col md={6}>

                    </Col>
                    <Col md={6}>
                        <Form id='myform'>
                        <Form.Control placeholder='Votre nom *' type='text' className='mb-2' data-aos="fade-up" data-aos-duration={2000}/>
                            <Form.Control placeholder='Votre email *' type ='email' className='mb-2' data-aos="fade-up" data-aos-duration={2000}/>
                            <Form.Control placeholder='Sujet *' className='mb-2' data-aos="fade-up" data-aos-duration={2000}/>
                            <div className='mb-2 custom-file' data-aos="fade-up" data-aos-duration={2000}>
                              <input type="file" className='custom-file-input form-control' name='file' id='file'/>
                              <label className='custom-file-label' htmlFor='file'>Objet</label>
                            </div>
                            <Form.Control as={"textarea"} rows={3} type='file' className='mb-2' data-aos="fade-up" data-aos-duration={2000}/>
                            
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4} className='d-flex flex-column justify-content-center align-items-center'>
                      <Button size='lg'  onClick={this.clickEnventListener} data-aos="fade-up" data-aos-duration={2000}>
                          Envoyer
                      </Button>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </section>
      </React.Fragment>
    )
  }
}
