import React, { Component } from 'react'
import bg from '../assets/images/banner/formation.png'
import Header from './dev/Header'
import ContentFormation from './dev/ContentFormation'
export default class Formation extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title='Formation professionnel' src={bg}/>
        <ContentFormation/>
      </React.Fragment>
    )
  }
}
