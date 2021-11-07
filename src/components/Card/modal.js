import SweetAlert from 'react-bootstrap-sweetalert'
import { useSelector, useDispatch } from 'react-redux'
import { setModal, setCard, addCard, updateCard, removeCard } from '../../store/modules/task/actions'

const Modal = () => {

  const dispatch = useDispatch()
  const { modal, columns, card } = useSelector((state) => state.tasks)

  const closeModal = () => {
    dispatch(setModal(
      {
        opened: false
      }
    ))
  }

  const actionSetCard = (obj) => {
    dispatch(setCard(obj))
  }

  const changeCard = () => {
    const action = 
      modal?.type === "CREATE" ? addCard() : updateCard();
    dispatch(action)
    closeModal()
  }

  const actionRemoveCard = () => {
    dispatch(removeCard())
    closeModal()
  }

  return (
    <SweetAlert
      show={modal?.opened}
      showConfirm={false}
      onConfirm={() => closeModal()}
      onCancel={() => closeModal()}
    >
      <h4>{modal.type === 'CREATE' ? 'Criar ' : 'Atualizar '}Task</h4>
      <select
        value={card?.columnId}
        className="form-control"
        onChange={
          (e) => {
            actionSetCard({
              columnId: parseInt(e.target.value)
            })
          }
        }>
        {columns?.map((column) =>
          <option value={column?.id}>{column?.title}</option>
        )}
      </select>
      <input
        placeholder="Nome da Task"
        type="text"
        value={card?.title}
        className="form-control mt-2"
        onChange={
          (e) => {
            actionSetCard({
              title: e.target.value
            })
          }
        } />
      <textarea
        placeholder="Descrição da Task"
        value={card?.description}
        className="form-control mt-2"
        rows={3}
        onChange={
          (e) => {
            actionSetCard({
              description: e.target.value
            })
          }
        } />
      <button
        className={`btn btn-block btn-${modal.type === 'CREATE' ? 'success' : 'primary'} mt-2`}
        onClick={() => changeCard()}
      >
        {modal.type === 'CREATE' ? 'Criar' : 'Atualizar'}
      </button>
      {modal.type === 'UPDATE' &&
        <button
          className="btn btn-block btn-danger"
          onClick={() => actionRemoveCard()}
        >Excluir</button>}
    </SweetAlert >
  )
}

export default Modal