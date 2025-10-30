import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const ExploreScreen = () => {
    const navigation = useNavigation()
    const onPress = () => {
navigation.navigate('Home')
    }
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Go to home screen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
})