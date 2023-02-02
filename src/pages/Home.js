import React, { Component } from 'react'
import Acceuil from './home/Acceuil'
import About from './home/About'
import Service from './home/Service'
import Contact from './home/Contact'


export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <Acceuil/>
          <About/>
          <Service/>
          <Contact/>
      </React.Fragment>
    )
  }
}
