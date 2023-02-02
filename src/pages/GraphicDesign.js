import React, { Component } from 'react'
import Header from './dev/Header'
import bg from '../assets/images/banner/graphic.jpg'
import ContentDesign from './dev/ContentDesign'
export default class GraphicDesign extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title='Graphic Design' src={bg} />
        <ContentDesign/>
      </React.Fragment>
    )
  }
}
