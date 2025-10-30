import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator

 } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import ProfileScreen from '../screens/ProfileScreen'
const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='Home' component={TabNavigator}/>
    <Drawer.Screen name='Profile' component={ProfileScreen}/>
   </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})