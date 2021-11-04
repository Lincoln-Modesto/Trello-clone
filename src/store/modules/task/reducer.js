import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
  modal: {
    type: 'CREATE',
    opened: false
  },
  column: '',
  columns: [
    {
      id: 1,
      title: 'Coluna 1'
    }
  ],
  cards: [

  ],
  card: {
    id: null,
    columnId: null,
    title: 'Título da tarefa',
    description: 'Descrição da tarefa'
  }
}

function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {

    case types.ADD_CARD:
      //adicionar task na lista
      return produce(state, (draft) => {
        draft.cards.push(
          {
            ...draft.card,
            id: new Date().getTime()
          }
        )
      })

    case types.UPDATE_CARD:
      return produce(state, (draft) => {
        const index = draft.cards.findIndex(
          (card) => card?.id === draft?.card.id
        )
        if (index !== -1) {
          draft.cards[index] = draft?.card
        }
      })

    case types.REMOVE_CARD:
      return produce(state, (draft) => {
        const index = draft.cards.findIndex(
          (card) => card?.id === draft?.card.id
        )
        if (index !== -1) {
          draft.cards.splice(index, 1)
        }
      })

    case types.SET_CARD:
      return produce(state, (draft) => {
        draft.card = { ...draft.card, ...action.card, }
      })

    case types.ADD_COLUMN:
      return produce(state, (draft) => {
        draft.columns.push({
          id: draft.columns.length + 1,
          title: draft.column
        })
      })

    case types.UPDATE_COLUMN_NAME:
      return produce(state, (draft) => {
        draft.column = action.column
      })

    case types.SET_MODAL:
      return produce(state, (draft) => {
        draft.modal = { ...draft.modal, ...action.modal }
      })

    default: return state
  }
}

export default tasks