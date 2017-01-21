import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleDashboard from './redux/containers/dashboard'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import FPT from './redux/reducers'

const store = createStore(FPT, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <VisibleDashboard />
      </Provider>
    );
  }
}

export default App;