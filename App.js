// import React from 'react';
// import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
// function App() {

//   const handlePress = () => {
//     Alert.alert("THIS IS ALERT")
//   }
//   return (
//     <View style={styles.container}>
//       <View style={{ backgroundColor: 'blue', height: 100, width: 150 }}>
//         <Text style={styles.bold}>BOX - 1</Text>
//       </View>
//       <View style={{ backgroundColor: 'red', height: 80, width: 150 }}>
//         <Text style={styles.bold}>BOX 2</Text>
//       </View>

//       <Image
//         style={styles.reactImg}
//         source={{
//           uri: 'https://tse1.explicit.bing.net/th/id/OIP.-v7hmnipjMTO8z4AyzqcpAHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.4&o=7&rm=3',
//         }}
//       />
//       <Image
//         style={styles.reactImg}
//         source={require('./assets/splash-icon.png')}
//       />
//       <Button title='CLICK' onPress={handlePress}/>

//     </View>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   bold: {
//     fontSize: 50,
//     color: 'white',
//     fontWeight: 800,
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   reactImg: {
//     height: 100,
//     width: 100,
//   },
// });

import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView , SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(data);

  if(loading){
    return <View>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  }
  return (

    <SafeAreaProvider>
      <SafeAreaView>
      <View>
      <Text>App</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.bold}>{item.title}</Text>
          </View>
        )}
      />
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
  
  );
};

export default App;

const styles = StyleSheet.create({
  bold : {
    marginVertical : 4 ,
    fontSize : 20 ,
    fontWeight : 700,
    border : 1 ,
    borderColor : '#ff3'
  }
});
