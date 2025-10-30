import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import UsersScreen from '../screens/UsersScreen';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="User" component={UsersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
