import React, { Component } from 'react'
import PageNavbar from '../components/PageNavbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'

export default class Layouts extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:false
    }
  }

  listenLoadEvent = (e)=>{
    this.setState({loading:true});
    setTimeout(()=>{
      this.setState({loading:false});
    },2000);
  }

  componentDidMount(){
    window.addEventListener('load',this.listenLoadEvent);
  }

  render() {
    return (
        <React.Fragment>
            <ScrollRestoration/>
            {this.state.loading ? (
              <React.Fragment>
                <Preloader/>
              </React.Fragment>
            ):(
              <React.Fragment>
                <PageNavbar/>
                <Outlet/>
                <Footer/>
              </React.Fragment>
            )}
        </React.Fragment>
    )
  }
}
