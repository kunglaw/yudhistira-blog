import React, { Component } from 'react';
import Navbar from "./../components/organism/Navbar"
// import Test from "./../pages/Test"
import LandingPage from "./../pages/LandingPage"
import Post from "./../pages/Post"
import Footer from "./../components/organism/Footer"

import { BrowserRouter, Route } from "react-router-dom"

class Layout1 extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Navbar></Navbar>
                    <Route exact path="/" component={ LandingPage } />
                    <Route exact path="/posts" component={ Post } />
                    <Footer></Footer>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Layout1;