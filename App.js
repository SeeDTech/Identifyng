/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
*/
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Routes from './src/views/navigations/navigation';
import store from './src/store';

 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}
   
export default App