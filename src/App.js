import React, { Component } from 'react';
import Layout1 from "./layouts/Layout1"

import { Provider } from "react-redux"
import mystore from "./config/store"
// import Test from "./pages/Test"
// import Home from "./pages/Test/Home"

class App extends Component {
  render() {
    return (
      <Provider store={ mystore }>
        <div className="App">
          
            <Layout1></Layout1>
          
        </div>
      </Provider>
    );
  }
}

export default App;
