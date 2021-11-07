import types from "./types";

export const setCard = (card) => {
 return {
  type: types.SET_CARD,
  card
 }
}

export const setModal = (modal) => {
  return {
    type: types.SET_MODAL,
    modal
  }
}

export const updateColumnName = (column) => {
  return {
      type: types.UPDATE_COLUMN_NAME,
      column
  }
}

export const addColumn = () => {
  return {
    type: types.ADD_COLUMN
  }
}

export const addCard = () => {
  return {
    type: types.ADD_CARD
  }
}

export const updateCard = () => {
  return{
    type: types.UPDATE_CARD
  }
}

export const removeCard = () => {
  return{
    type: types.REMOVE_CARD
  }
}