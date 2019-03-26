import React from 'react'
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native'

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        style={styles.placeImage}
        source={props.placeImage}
        resizeMode="contain"
      />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
  },
  placeImage: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
})

export default listItem
