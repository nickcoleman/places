import React from 'react'
import {
  Button, Image, Modal, StyleSheet, Text, View,
} from 'react-native'


const placeDetail = (props) => {
  let modalContent = null
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.modalImage} source={props.selectedPlace.image} resizeMode="contain" />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    )
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="fade"
      onRequestClose={props.onModalClose}
    >
      <View style={styles.modalContent}>
        {modalContent}
        <View style={styles.buttonContainer}>
          <Button style={styles.modalButons} title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button style={styles.modalButons} title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
  },
  buttonContainer: {
    margin: 30,
  },
  modalButons: {
    width: 40,
  },
  modalImage: {
    width: '100%',
    height: 200,
    marginTop: 40,
  },
  placeName: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
})

export default placeDetail
