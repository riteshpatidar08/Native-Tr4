import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen'
const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
   <Tab.Navigator>
    <Tab.Screen name='Home' component={HomeScreen}/>
    <Tab.Screen name="Explore" component={ExploreScreen}/>
   </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})