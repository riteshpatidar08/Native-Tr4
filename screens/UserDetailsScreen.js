import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
const UserDetailsScreen = () => {
 const route = useRoute() ;
const {user} = route.params
  return (
    <View>
      <Text>User name : {user}</Text>
    </View>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({});
