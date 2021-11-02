import { useDispatch } from "react-redux"

const Card = ({id, title, description, columnId}) => {

  const dispatch = useDispatch();

  const actionSetModal = {
    type: '@TASKS/SET_MODAL',
    modal:{
        opened: true,
        type: 'UPDATE'
    }
}

const actionSetCard = {
    type: '@TASKS/SET_CARD',
    card: {
        id,
        columnId,
        title,
        description
    }
}

  return (
      <div class="card mt-2" onClick={() => 
        {dispatch(actionSetCard)
        dispatch(actionSetModal)}}>
        <div class="card-body">
          <h5 class="card-title">
            <span class="badge badge-secondary">-</span> {title}
          </h5>
          <small class="card-text">{description}</small>
        </div>
      </div>
  )
}

export default Card