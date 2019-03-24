import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'
import Add from './Add'
import List from './List'
import Detail from './Detail'
import Update from './Update'

const Navigation = createStackNavigator({
	List:{screen:List},
	Detail:{screen:Detail},
	Add:{screen:Add},
	Update:{screen:Update}

})

const AppContainer = createAppContainer(Navigation)


export default class App extends Component {
	
  render() {
    return (
     <AppContainer/>
    );
  }
}