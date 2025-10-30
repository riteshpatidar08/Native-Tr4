import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const UsersScreen = () => {
  const navigation = useNavigation();
  const usersData = [
    { id: 1, name: 'TEST' },
    { id: 2, name: 'TEST2' },
    { id: 3, name: 'TEST3' },
  ];
  return (
    <View>
      <FlatList
        data={usersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UsersDetailScreen', { user: item.name })
              }
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  card: {
    marginVertical: 40,
    padding: 20,
  },
});
