import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigator from './DrawerNavigator';
import UserDetailsScreen from '../screens/UserDetailsScreen';
const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
   <Stack.Navigator>
    <Stack.Screen options={{
        title : false
    }} name="Menu" component={DrawerNavigator}/>
    <Stack.Screen name="UsersDetailScreen" component={UserDetailsScreen}/>
   </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})