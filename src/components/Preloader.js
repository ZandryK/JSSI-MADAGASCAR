import React, { Component } from 'react'

export default class Preloader extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='preloader'>
          <div className='spinner'>
            <span className='spinner-rotate'></span>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
