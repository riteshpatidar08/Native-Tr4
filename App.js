// // // import React from 'react';
// // // import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
// // // function App() {

// // //   const handlePress = () => {
// // //     Alert.alert("THIS IS ALERT")
// // //   }
// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={{ backgroundColor: 'blue', height: 100, width: 150 }}>
// // //         <Text style={styles.bold}>BOX - 1</Text>
// // //       </View>
// // //       <View style={{ backgroundColor: 'red', height: 80, width: 150 }}>
// // //         <Text style={styles.bold}>BOX 2</Text>
// // //       </View>

// // //       <Image
// // //         style={styles.reactImg}
// // //         source={{
// // //           uri: 'https://tse1.explicit.bing.net/th/id/OIP.-v7hmnipjMTO8z4AyzqcpAHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.4&o=7&rm=3',
// // //         }}
// // //       />
// // //       <Image
// // //         style={styles.reactImg}
// // //         source={require('./assets/splash-icon.png')}
// // //       />
// // //       <Button title='CLICK' onPress={handlePress}/>

// // //     </View>
// // //   );
// // // }

// // // export default App;

// // // const styles = StyleSheet.create({
// // //   bold: {
// // //     fontSize: 50,
// // //     color: 'white',
// // //     fontWeight: 800,
// // //   },
// // //   container: {
// // //     flex: 1,
// // //     flexDirection: 'column',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   reactImg: {
// // //     height: 100,
// // //     width: 100,
// // //   },
// // // });

// // import {
// //   FlatList,
// //   ActivityIndicator,
// //   StyleSheet,
// //   Text,
// //   View,
// //   TextInput,
// //   Button,
// //   Alert
// // } from 'react-native';
// // import React from 'react';
// // import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // const App = () => {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [email , setEmail] = useState("") ;
// //   const [password , setPassword] = useState("");
// //   useEffect(() => {
// //     setLoading(true);
// //     axios
// //       .get('https://jsonplaceholder.typicode.com/todos')
// //       .then((res) => {
// //         setData(res.data);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   }, []);
// //   console.log(data);

// //   if (loading) {
// //     return (
// //       <View>
// //         <ActivityIndicator size="small" color="#0000ff" />
// //       </View>
// //     );
// //   }
// //   const handleFormSubmit = () => {
// //     Alert.alert(email ,password)
// //   }
// //   return (
// //     <SafeAreaProvider>
// //       <SafeAreaView>
// //         {/* <View style={{marginVertical : 20}}>
// //       <Text>App</Text>
// //       <FlatList
// //         data={data}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View>
// //             <Text style={styles.bold}>{item.title}</Text>
// //           </View>
// //         )}
// //       />
// //     </View> */}
// //         <View>
// //           <TextInput style={styles.input} placeholder='Enter email'
// //           keyboardType='email-address'
// //           onChangeText={setEmail}
// //           value={email}
// //           returnKeyType='next' />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Enter Password"
// //            secureTextEntry
// //            onChangeText={setPassword}
// //            value={password}
// //            returnKeyType='done'
// //           />
// //           <Button  title="SUBMIT" onPress={handleFormSubmit}/>
// //         </View>
// //       </SafeAreaView>
// //     </SafeAreaProvider>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   bold: {
// //     marginVertical: 4,
// //     fontSize: 20,
// //     fontWeight: 700,
// //     border: 1,
// //     borderColor: '#ff3',
// //   },
// //   input: {
// //     height: 40,
// //     margin: 12,
// //     borderWidth: 1,
// //     padding: 10,
// //   },
// // });

// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';
// const App = () => {
//   const Tab = createBottomTabNavigator();
//   const Drawer = createDrawerNavigator()
//   return (
//     <NavigationContainer>
//       {/* <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator> */}
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'
import StackNavigator from './navigation/StackNavigator'
const App = () => {
  return (
   <NavigationContainer>
    <StackNavigator/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})