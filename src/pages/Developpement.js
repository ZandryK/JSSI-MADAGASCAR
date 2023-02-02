import React, { Component } from 'react'
import Header from './dev/Header'
import bg from '../assets/images/banner/dev.jpg'
import Content from './dev/Content'
export default class Developpement extends Component {
  render() {
    return (
      <React.Fragment>
            <Header title='Developpement Informatique' src={bg}/>
            <Content/>
      </React.Fragment>
    )
  }
}
