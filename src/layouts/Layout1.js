import React, { Component } from 'react';
import Navbar from "./../components/organism/Navbar"
// import Test from "./../pages/Test"
import LandingPage from "./../pages/LandingPage"
import Post from "./../pages/Post"
import PostDetail from "./../pages/PostDetail"
import Footer from "./../components/organism/Footer"
import NotFound from "./../pages/NotFound"

import { BrowserRouter, Route, Switch } from "react-router-dom"

class Layout1 extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Navbar></Navbar>
                    <Switch>
                        <Route exact path="/" component={ LandingPage } />
                        <Route exact path="/post" component={ Post } />
                        <Route path="/post/detail/:id" component={ PostDetail} />
                        <Route component={ NotFound } />
                    </Switch>
                    <Footer></Footer>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Layout1;