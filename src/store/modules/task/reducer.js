import produce from 'immer'

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
    {
      id: 1,
      columnId: 1,
      title: 'teste',
      description: 'teste'
    }
  ]
}

function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {

    case '@TASKS/ADD-TASK':
      //adicionar task na lista
      return produce(state, (draft) => {
        draft.cards.push(action.tasks)
      })

    case '@TASKS/UPDATE_COLUMN_NAME':
      return produce(state, (draft) => {
        draft.column = action.column
      })

    case '@TASKS/ADD_COLUMN':
      return produce(state, (draft) => {
        draft.columns.push({
          id: draft.columns.length + 1,
          title: draft.column
        })
      })

    case '@TASKS/SET_MODAL':
      return produce(state, (draft) => {
        draft.modal = { ...draft.modal, ...action.modal}
      })

    default: return state
  }
}

export default tasks