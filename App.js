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
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react' 
import AnimLogo from './src/components/buttons/AnimatedLogo';
import { View } from 'native-base';
import { BaseColor } from './src/styles/theme/color';

// const persistor = persistStore(store)

export const Loader = (<View style={{flex:1,alignItems:"center", justifyContent:'center',backgroundColor:BaseColor,alignContent:'center'}}>
<AnimLogo color='#fff'/>
</View>)

 class App extends Component {
  render() {
    return (
      <Provider store={store}>
       {/* <PersistGate loading={Loader} persistor={persistor}> */}
        <Routes/>
       {/* </PersistGate> */}
      </Provider>
    )
  }
}
   
export default App