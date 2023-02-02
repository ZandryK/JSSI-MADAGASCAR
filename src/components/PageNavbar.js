import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default class PageNavbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: 'transparent',
      navColor:'#fff'
    }
  }
  listenScrollEvent = (e) =>{
    if (window.scrollY > 20) {
      this.setState({backgroundColor:'#171621'})
    }else{
      this.setState({backgroundColor:'transparent'})
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="md" style={{backgroundColor:this.state.backgroundColor}} variant='dark' fixed='top'>
          <Container className='h-100'>
            <Navbar.Brand>JSSI</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-nav'/>
            <Navbar.Collapse id='navbar-nav' className='justify-content-end'>
              <Nav navbarScroll >
                    <Nav.Link href='/#home' style={{color:this.state.navColor}}>Acceuil</Nav.Link>
                    <Nav.Link href='/#about' style={{color:this.state.navColor}} >A propos</Nav.Link>
                    <Nav.Link href='/#service' style={{color:this.state.navColor}} >Services</Nav.Link>
                    <Nav.Link href='/#contact' style={{color:this.state.navColor}} >Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    )
  }
}
