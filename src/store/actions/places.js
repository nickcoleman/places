import {
  ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE
} from './actionTypes'

export addPlace = placeName => {
  return {
    type: 'ADD_PLACE',
    placeName: placeName
  }
}

export deletePlace = () => {
  return {
    type: 'DELETE_PLACE'
  }
}

export selectPlace = key => {
  return {
    type: 'SELECT_PLACE',
    placeKey: key
  }
}

export deselectPlace = () => {
  return {
    type: 'DESELECT_PLACE',
  }
}


