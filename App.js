/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import JF,{JF_setJSErrorCatcher} from 'jefferson'

JF.start()
JF_setJSErrorCatcher()
JF.saveGeovisionUserForCrashLog("dummyuser");
//
class App extends React.Component{
componentDidMount(){
// as() 
}
  render(){

    return(<View><TouchableOpacity onPress={()=>JF.fatalCrash()}><Text>press</Text></TouchableOpacity></View>)
  }
}

export default App;
